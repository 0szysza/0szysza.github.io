export const STORAGE_KEY = "hatchlist.collection.v1";
export const TAGS = Object.freeze(["Secret", "Infinity"]);
export const MAX_PETS = 1000;

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
  if (!Array.isArray(value.tags) || value.tags.some(tag => !TAGS.includes(tag)) || typeof value.collected !== "boolean") throw new Error("The backup contains invalid pet details.");
  if (typeof value.createdAt !== "string" || !Number.isFinite(Date.parse(value.createdAt))) throw new Error("The backup contains an invalid date.");
  return { id: value.id, name: value.name.trim(), image: imageUrl(value.image), tags: TAGS.filter(tag => value.tags.includes(tag)), collected: value.collected, createdAt: new Date(value.createdAt).toISOString() };
}

export function parseCollection(json) {
  let source;
  try { source = JSON.parse(json); } catch { throw new Error("This file is not a valid Hatchlist backup."); }
  if (!source || source.version !== 1 || !Array.isArray(source.pets)) throw new Error("Choose a Hatchlist backup exported from this app.");
  if (source.pets.length > MAX_PETS) throw new Error(`A collection can hold up to ${MAX_PETS} pets.`);
  const pets = source.pets.map(normalisePet);
  if (new Set(pets.map(pet => pet.id)).size !== pets.length) throw new Error("The backup contains duplicate pet IDs.");
  return pets;
}

export function serialiseCollection(pets) {
  return JSON.stringify({ version: 1, pets }, null, 2);
}

export function mergeCollection(current, incoming) {
  const ids = new Set(current.map(pet => pet.id));
  const additions = incoming.filter(pet => !ids.has(pet.id));
  if (current.length + additions.length > MAX_PETS) throw new Error(`A collection can hold up to ${MAX_PETS} pets.`);
  return [...current, ...additions];
}

export function filterPets(pets, { query = "", status = "all", tag = "all" } = {}) {
  const term = query.trim().toLocaleLowerCase();
  return pets.filter(pet => (!term || pet.name.toLocaleLowerCase().includes(term)) && (status === "all" || pet.collected === (status === "collected")) && (tag === "all" || pet.tags.includes(tag)));
}
