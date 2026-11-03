import test from "node:test";
import assert from "node:assert/strict";
import { TAGS, parseCollection, serialiseCollection, mergeCollection, filterPets, imageUrl, normaliseTag, normaliseHex, tagKey, availableTags } from "./model.mjs";

const pet = { id: "test-robot", name: "Giant Robot", image: "https://cdn.demand.gg/i/bgsi/pets/giant-robot/256.webp", tags: ["Secret", "Infinity"], collected: true, createdAt: "2026-11-03T12:00:00.000Z" };

test("backups preserve a pet's image, tags and collected state", () => {
  assert.deepEqual(parseCollection(serialiseCollection([pet])), [pet]);
});
test("importing an older backup preserves the current pet and adds new pets", () => {
  const fresh = { ...pet, id: "new-pet", name: "Another pet", collected: false };
  const result = mergeCollection([pet], [{ ...pet, collected: false }, fresh]);
  assert.deepEqual(result, [pet, fresh]);
});
test("invalid backup records reject the whole import", () => {
  for (const invalid of [{ ...pet, image: "javascript:alert(1)" }, { ...pet, tags: ["Admin"] }, { ...pet, collected: "yes" }, { ...pet, name: " " }, { ...pet, createdAt: "yesterday" }]) {
    assert.throws(() => parseCollection(serialiseCollection([pet, { ...invalid, id: "bad-record" }])));
  }
  assert.throws(() => parseCollection(serialiseCollection([pet, pet])));
  assert.throws(() => parseCollection('{"pets":[]}'));
});
test("filters compose without changing saved data", () => {
  const wanted = { ...pet, id: "wanted-robot", collected: false };
  const other = { ...pet, id: "other", name: "Other", tags: [] };
  const collection = [pet, wanted, other];
  assert.deepEqual(filterPets(collection, { query: " robot ", status: "wanted", tag: "Infinity" }), [wanted]);
  assert.deepEqual(collection, [pet, wanted, other]);
});
test("image links allow public web URLs and reject executable or credential URLs", () => {
  assert.equal(imageUrl(" https://example.com/pet.webp "), "https://example.com/pet.webp");
  for (const url of ["data:image/svg+xml,xxx", "file:///pet.webp", "https://user:secret@example.com/pet.webp", "not a URL"]) assert.throws(() => imageUrl(url));
});

test("existing version-one collections retain their pets, tags and status", () => {
  assert.deepEqual(parseCollection(JSON.stringify({ version: 1, pets: [pet] })), [pet]);
});

test("all nine preset tags survive an export and import", () => {
  const tagged = { ...pet, tags: [...TAGS] };
  assert.deepEqual(TAGS, ["Legendary", "Secret", "Celestial", "Infinity", "VOID", "Shiny", "Mythic", "XL", "Super"]);
  assert.deepEqual(parseCollection(serialiseCollection([tagged])), [tagged]);
});

test("custom tags normalise names and HEX colours, and round trip with a pet", () => {
  const custom = normaliseTag({ name: "  Favourites  ", color: "a1b2c3" });
  assert.deepEqual(custom, { name: "Favourites", color: "#A1B2C3" });
  const tagged = { ...pet, tags: ["Secret", custom] };
  assert.deepEqual(parseCollection(serialiseCollection([tagged])), [tagged]);
  assert.equal(JSON.parse(serialiseCollection([tagged])).version, 2);
});

test("custom tags enforce the fifteen-character boundary and one plain HEX colour", () => {
  assert.equal(normaliseTag({ name: "123456789012345", color: "#123456" }).name.length, 15);
  for (const name of ["", "   ", "1234567890123456"]) assert.throws(() => normaliseTag({ name, color: "#123456" }));
  for (const color of ["red", "#12345", "#12345678", "#000000,#ffffff", "linear-gradient(red,blue)"]) assert.throws(() => normaliseHex(color));
  assert.throws(() => parseCollection(serialiseCollection([{ ...pet, tags: [{ name: "Too long tag name", color: "#123456" }] }])));
});

test("custom tag filters use both the name and colour and preserve other presets", () => {
  const blue = { name: "Goal", color: "#3498DB" };
  const pink = { name: "Goal", color: "#FF00FF" };
  const first = { ...pet, tags: ["Secret", blue] };
  const second = { ...pet, id: "other-robot", tags: ["Shiny", pink] };
  assert.deepEqual(filterPets([first, second], { tag: tagKey(blue) }), [first]);
  assert.deepEqual(filterPets([first, second], { tag: "Shiny" }), [second]);
  assert.deepEqual(availableTags([first, { ...first, id: "same-tag" }, second]).slice(TAGS.length), [blue, pink]);
});
