import { STORAGE_KEY, MAX_PETS, imageUrl, normaliseChance, normalisePet, normaliseTag, normaliseHex, tagKey, tagLabel, tagDetails, availableTags, customTagLibrary, parseLibrary, serialiseCollection, mergeCollection, filterPets, setCollected, setArchived, deleteCustomTag } from "./model.mjs?v=20261108-drop-chance";

const $ = id => document.getElementById(id);
const nodes = Object.fromEntries(["petGrid", "addPet", "emptyState", "searchPets", "tagFilterMenu", "tagFilterOptions", "petDialog", "petForm", "petName", "petImage", "petChance", "previewImage", "previewEgg", "toast", "toastMessage", "undoDelete", "importFile"].map(id => [id, $(id)]));
let pets = [];
let customTags = [];
let selectedTag = "all";
const archivedView = /\/hatchlist\/archive\/?$/.test(location.pathname);
let editingId = null;
let undoAction = null;
let toastTimer;
let previewTimer;
let unreadableData = null;
let filterTagSignature = "";
let formTagOptions = [];
let formSelectedTags = new Set();
const TAG_ORDER = ["Shiny", "Mythic", "XL", "Super", "Secret", "Celestial", "Infinity", "VOID", "Legendary", "Limited", "Perm", "Bounty"];

function orderedTags(tags) {
  const rank = tag => typeof tag === "string" ? TAG_ORDER.indexOf(tag) : TAG_ORDER.length;
  return [...tags].sort((a, b) => rank(a) - rank(b));
}

function icon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("icon");
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", "#i-" + name);
  svg.append(use);
  return svg;
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function tagDot() {
  const dot = element("span", "tag-dot");
  dot.setAttribute("aria-hidden", "true");
  return dot;
}

function tagAppearance(node, tag) {
  node.style.setProperty("--tag-dot-colour", tagDetails(tag).color);
  if (typeof tag === "string") node.dataset.preset = tag;
  else node.style.setProperty("--tag-paint", `linear-gradient(${tagDetails(tag).color}, ${tagDetails(tag).color})`);
}

function roleTag(tag) {
  const badge = element("span", "pet-tag");
  tagAppearance(badge, tag);
  badge.title = tagLabel(tag) + (typeof tag === "string" ? "" : " — " + tag.color);
  badge.append(tagDot(), element("span", "tag-name", tagLabel(tag)));
  return badge;
}

function renderTagFilter() {
  const tags = orderedTags(availableTags(pets, customTags));
  const viewPets = pets.filter(pet => pet.archived === archivedView);
  const counts = new Map(tags.map(tag => [tagKey(tag), viewPets.filter(pet => pet.tags.some(item => tagKey(item) === tagKey(tag))).length]));
  if (!counts.get(selectedTag)) selectedTag = "all";
  const signature = JSON.stringify([tags, selectedTag, [...counts], viewPets.length]);
  if (signature === filterTagSignature) return;
  filterTagSignature = signature;
  nodes.tagFilterOptions.replaceChildren();
  for (const tag of [null, ...tags]) {
    const key = tag ? tagKey(tag) : "all";
    const option = element("button", "tag-filter-option");
    option.type = "button";
    option.dataset.tag = key;
    option.setAttribute("aria-label", tag ? tagLabel(tag) : "All tags");
    option.setAttribute("aria-pressed", String(selectedTag === key));
    const count = tag ? counts.get(key) : viewPets.length;
    option.disabled = Boolean(tag && !count);
    if (option.disabled) option.title = `No pets with this tag in ${archivedView ? "Archive" : "Checklist"}`;
    const meta = element("span", "tag-filter-meta");
    meta.setAttribute("aria-hidden", "true");
    meta.append(element("span", "", String(count)), icon("check"));
    option.append(tag ? roleTag(tag) : element("span", "", "All tags"), meta);
    nodes.tagFilterOptions.append(option);
  }
  const current = tags.find(tag => tagKey(tag) === selectedTag);
  $("tagFilterCurrent").replaceChildren(current ? roleTag(current) : document.createTextNode("All tags"));
}

function renderFormTags() {
  formTagOptions = orderedTags(availableTags(pets, customTags));
  const host = $("tagChoices");
  host.replaceChildren();
  for (const tag of formTagOptions) {
    const label = element("label", "tag-menu-option");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "tags";
    input.value = tagKey(tag);
    input.checked = formSelectedTags.has(input.value);
    input.setAttribute("aria-label", tagLabel(tag));
    const selected = element("span", "tag-menu-check");
    selected.setAttribute("aria-hidden", "true");
    selected.append(icon("check"));
    label.append(input, roleTag(tag), selected);
    host.append(label);
  }
  renderFormTagSummary();
}

function renderFormTagSummary() {
  const selected = formTagOptions.filter(tag => formSelectedTags.has(tagKey(tag)));
  const summary = $("petTagsSummary");
  summary.replaceChildren();
  if (!selected.length) summary.textContent = "Select tags";
  else {
    selected.slice(0, 3).forEach(tag => summary.append(roleTag(tag)));
    if (selected.length > 3) summary.append(element("span", "selected-tag-count", `+${selected.length - 3}`));
  }
}

function closeFormTagMenu() {
  const menu = $("petTagsPopover");
  if (menu.matches(":popover-open")) menu.hidePopover();
}

function positionFormTagMenu() {
  const menu = $("petTagsPopover");
  const trigger = $("petTagsToggle").getBoundingClientRect();
  const width = Math.min(trigger.width, window.innerWidth - 24);
  const below = window.innerHeight - trigger.bottom - 20;
  const above = trigger.top - 20;
  const opensBelow = below >= 220 || below >= above;
  menu.style.width = `${width}px`;
  menu.style.left = `${Math.max(12, Math.min(trigger.left, window.innerWidth - width - 12))}px`;
  menu.style.top = opensBelow ? `${trigger.bottom + 8}px` : "auto";
  menu.style.bottom = opensBelow ? "auto" : `${window.innerHeight - trigger.top + 8}px`;
  menu.style.maxHeight = `${Math.min(360, Math.max(120, opensBelow ? below : above))}px`;
}

function renderTagLibrary() {
  const host = $("tagLibraryList");
  host.replaceChildren();
  if (!customTags.length) host.append(element("p", "library-empty", "No custom tags yet."));
  for (const tag of customTags) {
    const row = element("div", "tag-library-row");
    const remove = element("button", "tag-library-delete");
    remove.type = "button";
    remove.dataset.tag = tagKey(tag);
    remove.setAttribute("aria-label", "Delete tag " + tag.name);
    remove.append(icon("trash"));
    row.append(roleTag(tag), remove);
    host.append(row);
  }
}

function openTagLibrary() {
  nodes.tagFilterMenu.open = false;
  closeFormTagMenu();
  renderTagLibrary();
  $("tagLibraryDialog").showModal();
  document.body.classList.add("modal-open");
}

function openCustomTag() {
  closeFormTagMenu();
  $("customTagForm").reset();
  if (!$("colourSwatches").childElementCount) renderColourPalette();
  $("customTagName").setCustomValidity("");
  $("customTagHex").setCustomValidity("");
  updateCustomTagState();
  $("customTagDialog").showModal();
  $("customTagName").focus();
}

function renderColourPalette() {
  for (const [name, hex] of [["Red", "#FF3C35"], ["Orange", "#FF6A00"], ["Yellow", "#FFD800"], ["Green", "#34AF00"], ["Blue", "#00B6FF"], ["Pink", "#FF61FF"], ["Purple", "#9232FF"], ["Indigo", "#4632FF"], ["White", "#FFFFFF"], ["Grey", "#808080"]]) {
    const swatch = element("button", "colour-swatch");
    swatch.type = "button";
    swatch.dataset.colour = hex;
    swatch.style.backgroundColor = hex;
    swatch.setAttribute("aria-label", `${name} (${hex})`);
    swatch.setAttribute("aria-pressed", "false");
    swatch.title = hex;
    $("colourSwatches").append(swatch);
  }
}

function updateCustomTagState() {
  const name = $("customTagName").value;
  $("customTagNameCount").textContent = `${name.length} / 15`;
  try {
    const colour = normaliseHex($("customTagHex").value);
    for (const swatch of $("colourSwatches").children) swatch.setAttribute("aria-pressed", String(swatch.dataset.colour === colour));
  } catch { /* Keep the last selected swatch while the HEX field is incomplete. */ }
}

function addCustomTag() {
  const name = $("customTagName");
  const colour = $("customTagHex");
  name.setCustomValidity("");
  colour.setCustomValidity("");
  if (!name.value.trim() || name.value.trim().length > 15) {
    name.setCustomValidity("Use 1–15 characters for the tag name.");
    name.reportValidity();
    return false;
  }
  try { normaliseHex(colour.value); }
  catch (error) { colour.setCustomValidity(error.message); colour.reportValidity(); return false; }
  const tag = normaliseTag({ name: name.value, color: colour.value });
  if (!save(pets, null, [...customTags, tag])) return false;
  if (!$("tagLibraryDialog").open) formSelectedTags.add(tagKey(tag));
  renderFormTags();
  if ($("tagLibraryDialog").open) renderTagLibrary();
  $("customTagDialog").close();
  return true;
}

function hideToast() {
  nodes.toast.hidden = true;
  undoAction = null;
  clearTimeout(toastTimer);
}

function notify(message, undo = null, archiveLink = false) {
  clearTimeout(toastTimer);
  undoAction = undo;
  nodes.toastMessage.textContent = message;
  nodes.undoDelete.hidden = !undo;
  $("archiveToastLink").hidden = !archiveLink;
  syncToastHost();
  nodes.toast.hidden = false;
  toastTimer = setTimeout(hideToast, undo ? 10000 : 6000);
}

function syncToastHost() {
  const host = $("customTagDialog").open ? $("customTagDialog") : $("tagLibraryDialog").open ? $("tagLibraryDialog") : nodes.petDialog.open ? nodes.petDialog : document.body;
  host.append(nodes.toast);
}

function save(next, focus, nextTags = customTags) {
  if (unreadableData !== null) {
    notify("Export your original backup before making changes to this collection.");
    return false;
  }
  let library;
  try { library = customTagLibrary(next, nextTags); localStorage.setItem(STORAGE_KEY, serialiseCollection(next, library)); }
  catch { notify("This browser could not save the change. Try freeing some browser storage."); return false; }
  pets = next;
  customTags = library;
  hideToast();
  render();
  if (focus) {
    const card = [...nodes.petGrid.querySelectorAll(".pet-card")].find(node => node.dataset.petId === focus.id);
    const fallback = nodes.petGrid.querySelector('button[data-action="collect"], button[data-action="restore"]') || (archivedView ? $("listView") : nodes.addPet);
    (card?.querySelector(`[data-action="${focus.action}"]`) || fallback).focus({ preventScroll: true });
  }
  return true;
}

function petCard(pet) {
  const card = element("article", "pet-card" + (pet.collected ? " is-collected" : ""));
  card.dataset.petId = pet.id;
  card.setAttribute("aria-label", pet.name);

  const remove = element("button", "delete-pet");
  remove.type = "button";
  remove.dataset.action = "delete";
  remove.setAttribute("aria-label", "Delete " + pet.name);
  remove.title = "Delete pet";
  remove.append(icon("trash"));
  const actions = element("div", "pet-actions");
  if (!archivedView && pet.collected) {
    const archive = element("button", "archive-pet");
    archive.type = "button";
    archive.dataset.action = "archive";
    archive.setAttribute("aria-label", "Archive " + pet.name);
    archive.title = "Move to Archive";
    archive.append(icon("archive"));
    actions.append(archive);
  }
  actions.append(remove);

  const details = element("button", "pet-details");
  details.type = "button";
  details.dataset.action = "edit";
  details.setAttribute("aria-label", "Edit " + pet.name);
  details.title = "Edit pet";
  const art = element("span", "pet-art");
  const fallback = icon("image");
  const image = document.createElement("img");
  image.alt = pet.name;
  image.loading = "lazy";
  image.referrerPolicy = "no-referrer";
  image.style.opacity = "0";
  image.addEventListener("load", () => { image.hidden = false; image.style.removeProperty("opacity"); fallback.setAttribute("hidden", ""); });
  image.addEventListener("error", () => { image.hidden = true; fallback.removeAttribute("hidden"); });
  art.append(fallback);
  if (pet.image) { image.src = pet.image; art.append(image); }
  const name = element("span", "pet-name");
  const nameText = element("span", "", pet.name);
  const editIcon = icon("square-pen");
  if (pet.chance) {
    nameText.append(" ", element("span", "pet-chance", `1/${pet.chance}`), editIcon);
    name.append(nameText);
  } else {
    name.append(nameText, editIcon);
  }
  const tags = element("span", "pet-tags");
  for (const tag of orderedTags(pet.tags)) tags.append(roleTag(tag));
  details.append(art, name, tags);
  if (archivedView) {
    const time = element("time", "collected-time");
    if (pet.collectedAt) {
      time.dateTime = pet.collectedAt;
      const date = new Date(pet.collectedAt);
      time.title = date.toString();
      time.append(element("span", "", new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(date)), element("strong", "", new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZoneName: "short" }).format(date)));
    } else time.textContent = "Time not recorded";
    details.append(time);
  }

  const collect = element("button", "collect-control" + (archivedView ? " is-restore" : pet.collected ? " is-done" : ""));
  collect.type = "button";
  collect.dataset.action = archivedView ? "restore" : "collect";
  collect.setAttribute("aria-label", archivedView ? `Return ${pet.name} to checklist` : `Mark ${pet.name} as ${pet.collected ? "not collected" : "collected"}`);
  if (!archivedView) collect.setAttribute("aria-pressed", String(pet.collected));
  if (archivedView) collect.append(icon("arrow-left"));
  else {
    const check = element("span", "collect-check");
    check.setAttribute("aria-hidden", "true");
    check.append(icon("check"));
    collect.append(check);
  }
  collect.append(element("span", "", archivedView ? "Return to checklist" : pet.collected ? "Collected" : "Mark collected"));
  card.append(actions);
  card.append(details, collect);
  return card;
}

function render() {
  renderTagFilter();
  const archived = pets.filter(pet => pet.archived).length;
  $("listCount").textContent = String(pets.length - archived);
  $("archiveCount").textContent = String(archived);
  $("archiveView").hidden = archived === 0;
  $("pageTitle").textContent = archivedView ? "Archive" : "Pets";
  $(archivedView ? "archiveView" : "listView").setAttribute("aria-current", "page");
  nodes.addPet.hidden = archivedView;
  const visible = filterPets(pets, { query: nodes.searchPets.value, view: archivedView ? "archive" : "checklist", tag: selectedTag });
  if (archivedView) visible.sort((a, b) => (Date.parse(b.collectedAt) || 0) - (Date.parse(a.collectedAt) || 0));
  for (const card of nodes.petGrid.querySelectorAll(".pet-card")) card.remove();
  const fragment = document.createDocumentFragment();
  visible.forEach(pet => fragment.append(petCard(pet)));
  nodes.petGrid.insertBefore(fragment, nodes.addPet);
  nodes.emptyState.hidden = visible.length > 0 || (!archivedView && !nodes.searchPets.value.trim() && selectedTag === "all");
  nodes.emptyState.querySelector("p").textContent = archivedView && !archived ? "No archived pets yet." : "No pets match the current filters.";
}

function previewImage() {
  clearTimeout(previewTimer);
  nodes.previewImage.hidden = true;
  nodes.previewEgg.removeAttribute("hidden");
  const value = nodes.petImage.value.trim();
  if (!value) { nodes.previewImage.removeAttribute("src"); return; }
  let url;
  try { url = imageUrl(value); } catch { return; }
  previewTimer = setTimeout(() => {
    nodes.previewImage.onload = () => {
      nodes.previewImage.hidden = false;
      nodes.previewEgg.setAttribute("hidden", "");
    };
    nodes.previewImage.onerror = () => {
      nodes.previewImage.hidden = true;
      nodes.previewEgg.removeAttribute("hidden");
    };
    nodes.previewImage.src = url;
  }, 180);
}

function openPet(pet = null) {
  closeFormTagMenu();
  editingId = pet?.id || null;
  nodes.petForm.reset();
  formSelectedTags = new Set((pet?.tags || []).map(tagKey));
  renderFormTags();
  nodes.petName.setCustomValidity("");
  nodes.petImage.setCustomValidity("");
  nodes.petChance.setCustomValidity("");
  $("dialogTitle").textContent = pet ? `Edit ${pet.name}` : "Add a pet";
  $("savePet").replaceChildren(icon(pet ? "check" : "plus"), element("span", "", pet ? "Save changes" : "Add pet"));
  if (pet) {
    nodes.petName.value = pet.name;
    nodes.petImage.value = pet.image;
    nodes.petChance.value = pet.chance ?? "";
  }
  previewImage();
  nodes.petDialog.showModal();
  document.body.classList.add("modal-open");
  nodes.petName.focus();
}

nodes.addPet.addEventListener("click", () => openPet());
$("closeDialog").addEventListener("click", () => nodes.petDialog.close());
$("cancelDialog").addEventListener("click", () => nodes.petDialog.close());
nodes.petDialog.addEventListener("close", () => {
  closeFormTagMenu();
  if ($("customTagDialog").open) $("customTagDialog").close();
  if ($("tagLibraryDialog").open) $("tagLibraryDialog").close();
  document.body.classList.remove("modal-open");
  clearTimeout(previewTimer);
  syncToastHost();
});
nodes.petDialog.addEventListener("click", event => {
  if (event.target !== nodes.petDialog) return;
  const rect = nodes.petDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) nodes.petDialog.close();
});
nodes.petName.addEventListener("input", () => {
  nodes.petName.setCustomValidity("");
  if (editingId) $("dialogTitle").textContent = `Edit ${nodes.petName.value.trim() || "pet"}`;
});
nodes.petImage.addEventListener("input", () => { nodes.petImage.setCustomValidity(""); previewImage(); });
nodes.petChance.addEventListener("input", () => nodes.petChance.setCustomValidity(""));
$("tagChoices").addEventListener("change", event => {
  const input = event.target;
  if (input.name !== "tags") return;
  if (input.checked) formSelectedTags.add(input.value);
  else formSelectedTags.delete(input.value);
  renderFormTagSummary();
});
$("petTagsPopover").addEventListener("beforetoggle", event => {
  if (event.newState === "open") positionFormTagMenu();
});
$("petTagsPopover").addEventListener("toggle", event => $("petTagsToggle").setAttribute("aria-expanded", String(event.newState === "open")));
window.addEventListener("resize", () => { if ($("petTagsPopover").matches(":popover-open")) positionFormTagMenu(); });
nodes.petDialog.addEventListener("scroll", () => { if ($("petTagsPopover").matches(":popover-open")) positionFormTagMenu(); }, { passive: true });
$("showCustomTag").addEventListener("click", openCustomTag);
$("createLibraryTag").addEventListener("click", openCustomTag);
for (const id of ["manageTags", "filterManageTags"]) $(id).addEventListener("click", openTagLibrary);
$("closeTagLibrary").addEventListener("click", () => $("tagLibraryDialog").close());
$("tagLibraryDialog").addEventListener("click", event => {
  if (event.target !== $("tagLibraryDialog")) return;
  const rect = $("tagLibraryDialog").getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) $("tagLibraryDialog").close();
});
for (const id of ["customTagDialog", "tagLibraryDialog"]) $(id).addEventListener("close", () => {
  syncToastHost();
  if (!document.querySelector("dialog[open]")) document.body.classList.remove("modal-open");
});
$("tagLibraryList").addEventListener("click", event => {
  const button = event.target.closest("button[data-tag]");
  if (!button) return;
  const key = button.dataset.tag;
  const tag = customTags.find(item => tagKey(item) === key);
  if (!tag) return;
  const ids = new Set(pets.filter(pet => pet.tags.some(item => tagKey(item) === key)).map(pet => pet.id));
  const wasSelected = formSelectedTags.has(key);
  const editedPet = editingId;
  const next = deleteCustomTag(pets, customTags, key);
  if (!save(next.pets, null, next.customTags)) return;
  formSelectedTags.delete(key);
  renderFormTags();
  renderTagLibrary();
  notify(`${tag.name} deleted.`, () => {
    const restored = pets.map(pet => ids.has(pet.id) && !pet.tags.some(item => tagKey(item) === key) ? { ...pet, tags: [...pet.tags, tag] } : pet);
    if (!save(restored, null, [...customTags, tag])) return false;
    if (wasSelected && editingId === editedPet) formSelectedTags.add(key);
    renderFormTags();
    renderTagLibrary();
    return true;
  });
});
for (const id of ["cancelCustomTag", "closeCustomTag"]) $(id).addEventListener("click", () => $("customTagDialog").close());
$("customTagDialog").addEventListener("click", event => {
  if (event.target !== $("customTagDialog")) return;
  const rect = $("customTagDialog").getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) $("customTagDialog").close();
});
$("customTagForm").addEventListener("submit", event => { event.preventDefault(); addCustomTag(); });
$("customTagName").addEventListener("input", () => { $("customTagName").setCustomValidity(""); updateCustomTagState(); });
$("customTagHex").addEventListener("input", () => { $("customTagHex").setCustomValidity(""); updateCustomTagState(); });
$("colourSwatches").addEventListener("click", event => {
  const swatch = event.target.closest("button[data-colour]");
  if (!swatch) return;
  $("customTagHex").value = swatch.dataset.colour;
  $("customTagHex").setCustomValidity("");
  updateCustomTagState();
});
nodes.petForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!nodes.petName.value.trim()) { nodes.petName.setCustomValidity("Enter a pet name."); nodes.petName.reportValidity(); return; }
  let image;
  try { image = imageUrl(nodes.petImage.value); }
  catch (error) { nodes.petImage.setCustomValidity(error.message); nodes.petImage.reportValidity(); return; }
  let chance;
  try { chance = normaliseChance(nodes.petChance.value); }
  catch (error) { nodes.petChance.setCustomValidity(error.message); nodes.petChance.reportValidity(); return; }
  const previous = editingId ? pets.find(pet => pet.id === editingId) : null;
  if (editingId && !previous) { nodes.petDialog.close(); notify("This pet was removed in another tab."); return; }
  if (!previous && pets.length >= MAX_PETS) { notify(`Your collection can hold up to ${MAX_PETS} pets.`); return; }
  const pet = normalisePet({
    id: previous?.id || crypto.randomUUID(),
    name: nodes.petName.value,
    image,
    chance,
    tags: formTagOptions.filter(tag => formSelectedTags.has(tagKey(tag))),
    collected: previous?.collected || false,
    archived: previous?.archived || false,
    collectedAt: previous?.collectedAt || null,
    createdAt: previous?.createdAt || new Date().toISOString(),
  });
  if (save(previous ? pets.map(item => item.id === pet.id ? pet : item) : [...pets, pet])) {
    nodes.petDialog.close();
    notify(previous ? "Pet updated." : `${pet.name} added to your hatchlist.`);
  }
});

nodes.petGrid.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const id = button.closest(".pet-card")?.dataset.petId;
  const pet = pets.find(item => item.id === id);
  if (!pet) return;
  if (button.dataset.action === "edit") openPet(pet);
  if (button.dataset.action === "collect") movePet(pet);
  if (button.dataset.action === "archive" && pet.collected) archivePet(pet, true);
  if (button.dataset.action === "restore") archivePet(pet, false);
  if (button.dataset.action === "delete") {
    const index = pets.findIndex(item => item.id === id);
    if (save(pets.filter(item => item.id !== id), { id, action: "delete" })) {
      notify(`${pet.name} deleted.`, () => {
        if (pets.some(item => item.id === id)) return false;
        const restored = [...pets];
        restored.splice(Math.min(index, restored.length), 0, pet);
        return save(restored);
      });
    }
  }
});

function movePet(pet) {
  const id = pet.id;
  const collected = !pet.collected;
  const updated = setCollected(pet, collected);
  if (!save(pets.map(item => item.id === id ? updated : item), { id, action: "collect" })) return;
  notify(`${pet.name} marked as ${collected ? "collected" : "not collected"}.`, () => {
    if (!pets.some(item => item.id === id)) return false;
    return save(pets.map(item => item.id === id ? { ...item, collected: pet.collected, archived: pet.archived, collectedAt: pet.collectedAt } : item));
  });
}

function archivePet(pet, archived) {
  const updated = setArchived(pet, archived);
  if (!save(pets.map(item => item.id === pet.id ? updated : item), { id: pet.id, action: archived ? "archive" : "restore" })) return;
  notify(`${pet.name} moved to ${archived ? "Archive" : "Checklist"}.`, () => {
    if (!pets.some(item => item.id === pet.id)) return false;
    return save(pets.map(item => item.id === pet.id ? { ...item, archived: pet.archived } : item));
  }, archived);
}

nodes.undoDelete.addEventListener("click", () => {
  const undo = undoAction;
  if (undo && undo()) notify("Change undone.");
});
$("dismissToast").addEventListener("click", hideToast);
nodes.searchPets.addEventListener("input", render);
nodes.tagFilterOptions.addEventListener("click", event => {
  const button = event.target.closest("button[data-tag]");
  if (!button) return;
  selectedTag = button.dataset.tag;
  nodes.tagFilterMenu.open = false;
  render();
  nodes.tagFilterMenu.querySelector("summary").focus();
});

function exportCollection() {
  const recovery = unreadableData !== null;
  const file = new Blob([recovery ? unreadableData : serialiseCollection(pets, customTags)], { type: "application/json" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = `hatchlist-${recovery ? "recovery-" : ""}${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  $("backupMenu").open = false;
  if (recovery) { unreadableData = null; notify("Original data exported. You can now start a new collection."); }
}
$("exportList").addEventListener("click", exportCollection);
$("footerExport").addEventListener("click", exportCollection);
$("importList").addEventListener("click", () => { $("backupMenu").open = false; nodes.importFile.click(); });
nodes.importFile.addEventListener("change", async () => {
  const file = nodes.importFile.files[0];
  nodes.importFile.value = "";
  if (!file) return;
  if (file.size > 3 * 1024 * 1024) { notify("Choose a backup smaller than 3 MB."); return; }
  try {
    const incoming = parseLibrary(await file.text());
    const next = mergeCollection(pets, incoming.pets);
    const added = next.length - pets.length;
    if (save(next, null, [...customTags, ...incoming.customTags])) notify(added ? `${added} ${added === 1 ? "pet" : "pets"} imported.` : "Backup imported.");
  } catch (error) { notify(error.message); }
});

for (const menu of [$("toolsMenu"), $("backupMenu"), nodes.tagFilterMenu]) {
  document.addEventListener("pointerdown", event => { if (!menu.contains(event.target)) menu.open = false; });
  menu.addEventListener("keydown", event => {
    if (event.key === "Escape") { menu.open = false; menu.querySelector("summary").focus(); }
  });
}
window.addEventListener("storage", event => {
  if (event.key !== STORAGE_KEY) return;
  try {
    const state = event.newValue ? parseLibrary(event.newValue) : { pets: [], customTags: [] };
    pets = state.pets; customTags = state.customTags; unreadableData = null; hideToast(); render();
    if (nodes.petDialog.open) renderFormTags();
    if ($("tagLibraryDialog").open) renderTagLibrary();
  }
  catch { notify("An update from another tab could not be read. Your current view has been kept."); }
});

try {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try { const state = parseLibrary(stored); pets = state.pets; customTags = state.customTags; }
    catch { unreadableData = stored; notify("Saved data could not be read. Export a backup before starting again."); }
  }
} catch { notify("This browser has disabled local storage. Enable it to keep your collection."); }
render();


