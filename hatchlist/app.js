import { STORAGE_KEY, MAX_PETS, imageUrl, normalisePet, normaliseTag, normaliseHex, tagKey, tagLabel, tagDetails, availableTags, parseCollection, serialiseCollection, mergeCollection, filterPets } from "./model.mjs?v=20261103-tags";

const $ = id => document.getElementById(id);
const nodes = Object.fromEntries(["petGrid", "addPet", "emptyState", "searchPets", "tagFilter", "statusFilters", "petDialog", "petForm", "petName", "petImage", "previewImage", "previewEgg", "previewCaption", "toast", "toastMessage", "undoDelete", "importFile"].map(id => [id, $(id)]));
let pets = [];
let status = "all";
let editingId = null;
let removed = [];
let toastTimer;
let previewTimer;
let unreadableData = null;
let filterTagSignature = "";
let formTagOptions = [];
let formSelectedTags = new Set();
let formCustomTags = [];

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
  const tags = availableTags(pets);
  const signature = JSON.stringify(tags);
  if (signature === filterTagSignature) return;
  filterTagSignature = signature;
  const selected = nodes.tagFilter.value;
  nodes.tagFilter.replaceChildren(new Option("All tags", "all"));
  for (const tag of tags) nodes.tagFilter.append(new Option(tagLabel(tag), tagKey(tag)));
  nodes.tagFilter.value = tags.some(tag => tagKey(tag) === selected) ? selected : "all";
}

function renderFormTags() {
  formTagOptions = availableTags(pets, formCustomTags);
  const host = $("tagChoices");
  host.replaceChildren();
  for (const tag of formTagOptions) {
    const label = element("label", "tag-option");
    tagAppearance(label, tag);
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "tags";
    input.value = tagKey(tag);
    input.checked = formSelectedTags.has(input.value);
    input.setAttribute("aria-label", tagLabel(tag));
    label.append(input, tagDot(), element("span", "tag-name", tagLabel(tag)));
    host.append(label);
  }
}

function openCustomTag() {
  $("customTagForm").reset();
  $("customTagName").setCustomValidity("");
  $("customTagHex").setCustomValidity("");
  updateCustomPreview();
  $("customTagDialog").showModal();
  $("customTagName").focus();
}

function updateCustomPreview() {
  const name = $("customTagName").value;
  $("customTagNameCount").textContent = `${name.length} / 15`;
  $("customTagPreviewName").textContent = name.trim() || "Custom tag";
  try {
    const colour = normaliseHex($("customTagHex").value);
    $("customTagColour").value = colour;
    $("customTagPreview").style.setProperty("--tag-paint", `linear-gradient(${colour}, ${colour})`);
  } catch { /* Keep the last valid preview while a HEX value is being typed. */ }
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
  formCustomTags.push(tag);
  formSelectedTags.add(tagKey(tag));
  renderFormTags();
  $("customTagDialog").close();
  return true;
}

function hideToast() {
  nodes.toast.hidden = true;
  removed = [];
  clearTimeout(toastTimer);
}

function notify(message, undo = false) {
  clearTimeout(toastTimer);
  if (!undo) removed = [];
  nodes.toastMessage.textContent = message;
  nodes.undoDelete.hidden = !undo;
  nodes.toast.hidden = false;
  toastTimer = setTimeout(hideToast, undo ? 10000 : 6000);
}

function save(next, focus) {
  if (unreadableData !== null) {
    notify("Export your original backup before making changes to this collection.");
    return false;
  }
  try { localStorage.setItem(STORAGE_KEY, serialiseCollection(next)); }
  catch { notify("This browser could not save the change. Try freeing some browser storage."); return false; }
  pets = next;
  render();
  if (focus) {
    const card = [...nodes.petGrid.querySelectorAll(".pet-card")].find(node => node.dataset.petId === focus.id);
    (card?.querySelector(`[data-action="${focus.action}"]`) || nodes.addPet).focus({ preventScroll: true });
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

  const details = element("button", "pet-details");
  details.type = "button";
  details.dataset.action = "edit";
  details.setAttribute("aria-label", "Edit " + pet.name);
  details.title = "Edit pet";
  const art = element("span", "pet-art");
  const fallback = icon("egg");
  const image = document.createElement("img");
  image.alt = pet.name;
  image.loading = "lazy";
  image.referrerPolicy = "no-referrer";
  image.style.opacity = "0";
  image.addEventListener("load", () => { image.hidden = false; image.style.removeProperty("opacity"); fallback.setAttribute("hidden", ""); });
  image.addEventListener("error", () => { image.hidden = true; fallback.removeAttribute("hidden"); });
  image.src = pet.image;
  art.append(fallback, image);
  const name = element("span", "pet-name");
  name.append(element("span", "", pet.name), icon("square-pen"));
  const tags = element("span", "pet-tags");
  for (const tag of pet.tags) tags.append(roleTag(tag));
  details.append(art, name, tags);

  const collect = element("button", "collect-button");
  collect.type = "button";
  collect.dataset.action = "collect";
  collect.setAttribute("aria-pressed", String(pet.collected));
  collect.setAttribute("aria-label", `Mark ${pet.name} as ${pet.collected ? "not collected" : "collected"}`);
  collect.append(icon(pet.collected ? "check" : "square"), document.createTextNode(pet.collected ? "Collected" : "Mark as collected"));
  card.append(remove, details, collect);
  return card;
}

function render() {
  renderTagFilter();
  const collected = pets.filter(pet => pet.collected).length;
  const total = pets.length;
  for (const [id, value] of [["allCount", total], ["wantedCount", total - collected], ["doneCount", collected]]) $(id).textContent = String(value);
  for (const button of nodes.statusFilters.querySelectorAll("button")) button.setAttribute("aria-pressed", String(button.dataset.status === status));
  const visible = filterPets(pets, { query: nodes.searchPets.value, status, tag: nodes.tagFilter.value });
  for (const card of nodes.petGrid.querySelectorAll(".pet-card")) card.remove();
  const fragment = document.createDocumentFragment();
  visible.forEach(pet => fragment.append(petCard(pet)));
  nodes.petGrid.insertBefore(fragment, nodes.emptyState);
  nodes.emptyState.hidden = visible.length > 0 || total === 0;
}

function previewImage() {
  clearTimeout(previewTimer);
  nodes.previewImage.hidden = true;
  nodes.previewEgg.removeAttribute("hidden");
  nodes.previewCaption.textContent = "Image preview";
  const value = nodes.petImage.value.trim();
  if (!value) { nodes.previewImage.removeAttribute("src"); return; }
  let url;
  try { url = imageUrl(value); } catch { nodes.previewCaption.textContent = "Paste a direct image link."; return; }
  previewTimer = setTimeout(() => {
    nodes.previewCaption.textContent = "Loading image…";
    nodes.previewImage.onload = () => {
      nodes.previewImage.hidden = false;
      nodes.previewEgg.setAttribute("hidden", "");
      nodes.previewCaption.textContent = "Image loaded";
    };
    nodes.previewImage.onerror = () => {
      nodes.previewImage.hidden = true;
      nodes.previewEgg.removeAttribute("hidden");
      nodes.previewCaption.textContent = "Image unavailable. You can update the link later.";
    };
    nodes.previewImage.src = url;
  }, 180);
}

function openPet(pet = null) {
  editingId = pet?.id || null;
  nodes.petForm.reset();
  formCustomTags = [];
  formSelectedTags = new Set((pet?.tags || []).map(tagKey));
  renderFormTags();
  nodes.petName.setCustomValidity("");
  nodes.petImage.setCustomValidity("");
  $("dialogTitle").textContent = pet ? "Edit pet" : "Add a pet";
  $("savePet").replaceChildren(icon(pet ? "check" : "plus"), element("span", "", pet ? "Save changes" : "Add pet"));
  if (pet) {
    nodes.petName.value = pet.name;
    nodes.petImage.value = pet.image;
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
  if ($("customTagDialog").open) $("customTagDialog").close();
  document.body.classList.remove("modal-open");
  clearTimeout(previewTimer);
});
nodes.petDialog.addEventListener("click", event => {
  if (event.target !== nodes.petDialog) return;
  const rect = nodes.petDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) nodes.petDialog.close();
});
nodes.petName.addEventListener("input", () => nodes.petName.setCustomValidity(""));
nodes.petImage.addEventListener("input", () => { nodes.petImage.setCustomValidity(""); previewImage(); });
$("tagChoices").addEventListener("change", event => {
  const input = event.target;
  if (input.name !== "tags") return;
  if (input.checked) formSelectedTags.add(input.value);
  else formSelectedTags.delete(input.value);
});
$("showCustomTag").addEventListener("click", openCustomTag);
for (const id of ["cancelCustomTag", "closeCustomTag"]) $(id).addEventListener("click", () => $("customTagDialog").close());
$("customTagDialog").addEventListener("click", event => {
  if (event.target !== $("customTagDialog")) return;
  const rect = $("customTagDialog").getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) $("customTagDialog").close();
});
$("customTagForm").addEventListener("submit", event => { event.preventDefault(); addCustomTag(); });
$("customTagName").addEventListener("input", () => { $("customTagName").setCustomValidity(""); updateCustomPreview(); });
$("customTagHex").addEventListener("input", () => { $("customTagHex").setCustomValidity(""); updateCustomPreview(); });
$("customTagColour").addEventListener("input", () => {
  $("customTagHex").value = $("customTagColour").value.toUpperCase();
  $("customTagHex").setCustomValidity("");
  updateCustomPreview();
});
nodes.petForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!nodes.petName.value.trim()) { nodes.petName.setCustomValidity("Enter a pet name."); nodes.petName.reportValidity(); return; }
  let image;
  try { image = imageUrl(nodes.petImage.value); }
  catch (error) { nodes.petImage.setCustomValidity(error.message); nodes.petImage.reportValidity(); return; }
  const previous = editingId ? pets.find(pet => pet.id === editingId) : null;
  if (editingId && !previous) { nodes.petDialog.close(); notify("This pet was removed in another tab."); return; }
  if (!previous && pets.length >= MAX_PETS) { notify(`Your collection can hold up to ${MAX_PETS} pets.`); return; }
  const pet = normalisePet({
    id: previous?.id || crypto.randomUUID(),
    name: nodes.petName.value,
    image,
    tags: formTagOptions.filter(tag => formSelectedTags.has(tagKey(tag))),
    collected: previous?.collected || false,
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
  if (button.dataset.action === "collect") {
    const collected = !pet.collected;
    if (save(pets.map(item => item.id === id ? { ...item, collected } : item), { id, action: "collect" })) notify(`${pet.name} ${collected ? "collected!" : "moved back to your wishlist."}`);
  }
  if (button.dataset.action === "delete") {
    const index = pets.findIndex(item => item.id === id);
    if (save(pets.filter(item => item.id !== id), { id, action: "delete" })) {
      removed.push({ pet, index });
      notify(removed.length > 1 ? `${removed.length} pets removed.` : `${pet.name} removed.`, true);
    }
  }
});

nodes.undoDelete.addEventListener("click", () => {
  const restored = [...pets];
  for (const { pet, index } of [...removed].reverse()) if (!restored.some(item => item.id === pet.id)) restored.splice(Math.min(index, restored.length), 0, pet);
  if (save(restored)) { removed = []; notify("Pets restored."); }
});
$("dismissToast").addEventListener("click", hideToast);
nodes.searchPets.addEventListener("input", render);
nodes.tagFilter.addEventListener("change", render);
nodes.statusFilters.addEventListener("click", event => {
  const button = event.target.closest("button[data-status]");
  if (!button) return;
  status = button.dataset.status;
  render();
});

function exportCollection() {
  const recovery = unreadableData !== null;
  const file = new Blob([recovery ? unreadableData : serialiseCollection(pets)], { type: "application/json" });
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
    const incoming = parseCollection(await file.text());
    const next = mergeCollection(pets, incoming);
    const added = next.length - pets.length;
    if (save(next)) notify(added ? `${added} ${added === 1 ? "pet" : "pets"} imported.` : "All pets in this backup are already in your collection.");
  } catch (error) { notify(error.message); }
});

for (const menu of [$("toolsMenu"), $("backupMenu")]) {
  document.addEventListener("pointerdown", event => { if (!menu.contains(event.target)) menu.open = false; });
  menu.addEventListener("keydown", event => {
    if (event.key === "Escape") { menu.open = false; menu.querySelector("summary").focus(); }
  });
}
window.addEventListener("storage", event => {
  if (event.key !== STORAGE_KEY) return;
  try { pets = event.newValue ? parseCollection(event.newValue) : []; unreadableData = null; render(); }
  catch { notify("An update from another tab could not be read. Your current view has been kept."); }
});

try {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try { pets = parseCollection(stored); }
    catch { unreadableData = stored; notify("Saved data could not be read. Export a backup before starting again."); }
  }
} catch { notify("This browser has disabled local storage. Enable it to keep your collection."); }
render();
