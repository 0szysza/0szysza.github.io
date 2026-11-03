export const STORAGE_KEY = "hatchlist.collection.v1";
export const TAG_DEFINITIONS = Object.freeze([
  { name: "Legendary", color: "#FF0000" },
  { name: "Secret", color: "#F700FF" },
  { name: "Celestial", color: "#9DDFFD" },
  { name: "Infinity", color: "#FF0000" },
  { name: "VOID", color: "#2B0001" },
  { name: "Shiny", color: "#F6D317" },
  { name: "Mythic", color: "#783DF7" },
  { name: "XL", color: "#FFCF54" },
  { name: "Super", color: "#FFF931" },
].map(tag => Object.freeze(tag)));
export const TAGS = Object.freeze(TAG_DEFINITIONS.map(tag => tag.name));
export const MAX_PETS = 1000;

export function normaliseHex(value) {
  if (typeof value !== "string" || !/^#?[0-9a-f]{6}$/i.test(value.trim())) throw new Error("Enter one six-digit HEX colour, such as #3498DB.");
  return "#" + value.trim().replace(/^#/, "").toUpperCase();
}

export function normaliseTag(value) {
  if (typeof value === "string") {
    if (!TAGS.includes(value)) throw new Error("The backup contains an unknown tag.");
    return value;
  }
  if (!value || typeof value !== "object" || typeof value.name !== "string") throw new Error("The backup contains an invalid custom tag.");
  const name = value.name.trim();
  if (!name || name.length > 15) throw new Error("Custom tag names must contain 1–15 characters.");
  return { name, color: normaliseHex(value.color) };
}

export function tagKey(tag) {
  return typeof tag === "string" ? tag : "custom:" + JSON.stringify([tag.name.toLocaleLowerCase(), tag.color.toUpperCase()]);
}

export function tagLabel(tag) {
  return typeof tag === "string" ? tag : tag.name;
}

export function tagDetails(tag) {
  return typeof tag === "string" ? TAG_DEFINITIONS.find(item => item.name === tag) : tag;
}

export function availableTags(pets, additional = []) {
  const tags = [...TAGS];
  const keys = new Set(tags.map(tagKey));
  for (const value of [...pets.flatMap(pet => pet.tags), ...additional]) {
    const tag = normaliseTag(value);
    const key = tagKey(tag);
    if (!keys.has(key)) { tags.push(tag); keys.add(key); }
  }
  return tags;
}

export function imageUrl(value) {
  if (typeof value !== "string" || value.length > 2048) throw new Error("Paste a valid image URL.");
  let url;
  try { url = new URL(value.trim()); } catch { throw new Error("Paste a valid image URL."); }
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) throw new Error("Use an http or https image URL.");
  return url.href;
}

export function normalisePet(value) {
  if (!value || typeof value !== "object" || typeof value.id !== "string" || !/^[a-zA-Z0-9_-]{1,100}$/.test(value.id)) throw new Error("The backup contains an invalid pet.");
  if (typeof value.name !== "string" || !value.name.trim() || value.name.trim().length > 80) throw new Error("Pet names must contain 1–80 characters.");
  if (!Array.isArray(value.tags) || typeof value.collected !== "boolean") throw new Error("The backup contains invalid pet details.");
  if (typeof value.createdAt !== "string" || !Number.isFinite(Date.parse(value.createdAt))) throw new Error("The backup contains an invalid date.");
  const tags = [...new Map(value.tags.map(normaliseTag).map(tag => [tagKey(tag), tag])).values()];
  return { id: value.id, name: value.name.trim(), image: imageUrl(value.image), tags, collected: value.collected, createdAt: new Date(value.createdAt).toISOString() };
}

export function parseCollection(json) {
  let source;
  try { source = JSON.parse(json); } catch { throw new Error("This file is not a valid Hatchlist backup."); }
  if (!source || ![1, 2].includes(source.version) || !Array.isArray(source.pets)) throw new Error("Choose a Hatchlist backup exported from this app.");
  if (source.pets.length > MAX_PETS) throw new Error(`A collection can hold up to ${MAX_PETS} pets.`);
  const pets = source.pets.map(normalisePet);
  if (new Set(pets.map(pet => pet.id)).size !== pets.length) throw new Error("The backup contains duplicate pet IDs.");
  return pets;
}

export function serialiseCollection(pets) {
  return JSON.stringify({ version: 2, pets }, null, 2);
}

export function mergeCollection(current, incoming) {
  const ids = new Set(current.map(pet => pet.id));
  const additions = incoming.filter(pet => !ids.has(pet.id));
  if (current.length + additions.length > MAX_PETS) throw new Error(`A collection can hold up to ${MAX_PETS} pets.`);
  return [...current, ...additions];
}

export function filterPets(pets, { query = "", status = "all", tag = "all" } = {}) {
  const term = query.trim().toLocaleLowerCase();
  return pets.filter(pet => (!term || pet.name.toLocaleLowerCase().includes(term)) && (status === "all" || pet.collected === (status === "collected")) && (tag === "all" || pet.tags.some(item => tagKey(item) === tag)));
}
