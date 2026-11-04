import test from "node:test";
import assert from "node:assert/strict";
import { hexToHsv, hsvToHex } from "./color.mjs";

test("hue slider covers primary and secondary colours, including its endpoint", () => {
  for (const [h, expected] of [[0, "#FF0000"], [60, "#FFFF00"], [120, "#00FF00"], [180, "#00FFFF"], [240, "#0000FF"], [300, "#FF00FF"], [360, "#FF0000"]]) {
    assert.equal(hsvToHex({ h, s: 100, v: 100 }), expected);
  }
});

test("colour field corners produce white, black and the chosen hue", () => {
  assert.equal(hsvToHex({ h: 240, s: 0, v: 100 }), "#FFFFFF");
  assert.equal(hsvToHex({ h: 240, s: 100, v: 100 }), "#0000FF");
  assert.equal(hsvToHex({ h: 240, s: 0, v: 0 }), "#000000");
  assert.equal(hsvToHex({ h: 240, s: 100, v: 0 }), "#000000");
});

test("typing a HEX colour and opening the picker preserves its exact value", () => {
  for (const hex of ["#3498DB", "#F7E3BA", "#2B0001", "#00B4FF", "#123456", "#FFFFFF", "#000000", "#808080"]) {
    assert.equal(hsvToHex(hexToHsv(hex)), hex);
  }
});

test("neutral colours preserve the selected hue for the next saturation adjustment", () => {
  assert.equal(hexToHsv("#FFFFFF", 204).h, 204);
  assert.equal(hexToHsv("#000000", 290).h, 290);
});
