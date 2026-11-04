import test from "node:test";
import assert from "node:assert/strict";
import { parseCollection, serialiseCollection, mergeCollection, filterPets, imageUrl } from "./model.mjs";

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
