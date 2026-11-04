import test from "node:test";
import assert from "node:assert/strict";
import { TAGS, parseCollection, parseLibrary, serialiseCollection, mergeCollection, filterPets, imageUrl, normaliseTag, normaliseHex, tagKey, availableTags, setCollected, setArchived, deleteCustomTag } from "./model.mjs";

const pet = { id: "test-robot", name: "Giant Robot", image: "https://cdn.demand.gg/i/bgsi/pets/giant-robot/256.webp", tags: ["Secret", "Infinity"], collected: true, archived: false, collectedAt: null, createdAt: "2026-11-03T12:00:00.000Z" };

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
  assert.deepEqual(parseCollection(JSON.stringify({ version: 1, pets: [pet] })), [{ ...pet, archived: true }]);
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
  assert.equal(JSON.parse(serialiseCollection([tagged])).version, 4);
});

test("pets without images round trip and unsafe nonempty image links remain rejected", () => {
  const noImage = { ...pet, image: "" };
  assert.deepEqual(parseCollection(serialiseCollection([noImage])), [noImage]);
  assert.equal(imageUrl("   "), "");
  assert.throws(() => imageUrl("javascript:alert(1)"));
});

test("a custom tag remains in the library after it is removed from every pet", () => {
  const custom = { name: "Goal", color: "#3498DB" };
  const before = parseLibrary(JSON.stringify({ version: 2, pets: [{ ...pet, tags: [custom] }] }));
  const after = parseLibrary(serialiseCollection([{ ...pet, tags: [] }], before.customTags));
  assert.deepEqual(after.customTags, [custom]);
  assert.deepEqual(after.pets[0].tags, []);
});

test("legacy collected pets migrate without inventing a collection time", () => {
  const { collectedAt, ...legacy } = pet;
  for (const version of [1, 2, 3]) {
    const migrated = parseLibrary(JSON.stringify({ version, pets: [legacy] }));
    assert.equal(migrated.pets[0].collected, true);
    assert.equal(migrated.pets[0].archived, true);
    assert.equal(migrated.pets[0].collectedAt, null);
  }
});

test("collecting again records the newer time and uncollecting clears it", () => {
  const first = setCollected({ ...pet, collected: false }, true, "2026-11-04T10:00:01.000Z");
  assert.equal(first.collectedAt, "2026-11-04T10:00:01.000Z");
  assert.equal(first.archived, false);
  const returned = setCollected(first, false);
  assert.equal(returned.collectedAt, null);
  const second = setCollected(returned, true, "2026-11-04T10:03:07.000Z");
  assert.equal(parseCollection(serialiseCollection([second]))[0].collectedAt, "2026-11-04T10:03:07.000Z");
});

test("collecting stays on the checklist; archiving and restoring retain the collection time", () => {
  const wanted = { ...pet, collected: false };
  const collected = setCollected(wanted, true, "2026-11-04T12:00:01.000Z");
  assert.deepEqual(filterPets([collected], { view: "checklist" }), [collected]);
  assert.deepEqual(filterPets([collected], { view: "archive" }), []);
  const archived = setArchived(collected, true);
  assert.deepEqual(filterPets([archived], { view: "checklist" }), []);
  assert.deepEqual(filterPets([archived], { view: "archive" }), [archived]);
  const restored = setArchived(archived, false);
  assert.equal(restored.collected, true);
  assert.equal(restored.collectedAt, collected.collectedAt);
  assert.equal(restored.archived, false);
  assert.deepEqual(wanted, { ...pet, collected: false });
});

test("checklist tag and search filters include both wanted and collected pets", () => {
  const wanted = { ...pet, id: "wanted", collected: false };
  const collected = { ...pet, id: "collected" };
  const archived = { ...pet, id: "archived", archived: true };
  assert.deepEqual(filterPets([wanted, collected, archived], { view: "checklist", query: "robot", tag: "Secret" }), [wanted, collected]);
  assert.deepEqual(filterPets([wanted, collected, archived], { view: "archive", tag: "Secret" }), [archived]);
});

test("new backups retain all three pet states and unused custom tags", () => {
  const pets = [{ ...pet, id: "wanted", collected: false }, { ...pet, id: "collected" }, { ...pet, id: "archived", archived: true }];
  const customTags = [{ name: "Later", color: "#3498DB" }];
  const backup = parseLibrary(serialiseCollection(pets, customTags));
  assert.deepEqual(backup, { pets, customTags });
});

test("legacy migration preserves archive placement and exact recorded collection times", () => {
  const time = "2026-11-04T09:12:34.000Z";
  const { archived, ...legacy } = { ...pet, collectedAt: time };
  for (const version of [1, 2, 3]) {
    const migrated = parseLibrary(JSON.stringify({ version, pets: [legacy, { ...legacy, id: "wanted", collected: false, collectedAt: null }] })).pets;
    assert.equal(migrated[0].archived, true);
    assert.equal(migrated[0].collectedAt, time);
    assert.equal(migrated[1].archived, false);
  }
});

test("uncollected pets cannot be archived and corrupt archive flags reject the backup", () => {
  const wanted = { ...pet, collected: false };
  assert.throws(() => setArchived(wanted, true));
  for (const archived of [true, "yes", 1]) assert.throws(() => parseLibrary(JSON.stringify({ version: 4, pets: [{ ...wanted, archived }] })));
  assert.equal(setCollected({ ...pet, archived: true }, false).archived, false);
});

test("deleting a custom tag removes assignments from list and archived pets only", () => {
  const custom = { name: "Goal", color: "#3498DB" };
  const source = [{ ...pet, tags: ["Secret", custom] }, { ...pet, id: "wanted", collected: false, tags: [custom, "Shiny"] }];
  const result = deleteCustomTag(source, [custom], tagKey(custom));
  assert.deepEqual(result.customTags, []);
  assert.deepEqual(result.pets.map(item => item.tags), [["Secret"], ["Shiny"]]);
  assert.throws(() => deleteCustomTag(source, [custom], "Secret"));
  assert.deepEqual(source[0].tags, ["Secret", custom]);
});

test("backup preserves unused custom tags and rejects corrupt collection times", () => {
  const custom = { name: "Later", color: "#D5905C" };
  assert.deepEqual(parseLibrary(serialiseCollection([], [custom])).customTags, [custom]);
  assert.throws(() => parseLibrary(JSON.stringify({ version: 3, pets: [{ ...pet, collectedAt: "invalid" }], customTags: [] })));
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

