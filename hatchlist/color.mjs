const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function hexToHsv(hex, fallbackHue = 0) {
  const rgb = hex.replace(/^#/, "").match(/../g).map(part => parseInt(part, 16) / 255);
  const [red, green, blue] = rgb;
  const high = Math.max(...rgb);
  const low = Math.min(...rgb);
  const difference = high - low;
  let hue = fallbackHue;
  if (difference) {
    if (high === red) hue = 60 * (((green - blue) / difference) % 6);
    else if (high === green) hue = 60 * ((blue - red) / difference + 2);
    else hue = 60 * ((red - green) / difference + 4);
    hue = (hue + 360) % 360;
  }
  return { h: hue, s: high ? difference / high * 100 : 0, v: high * 100 };
}

export function hsvToHex({ h, s, v }) {
  const hue = ((h % 360) + 360) % 360;
  const saturation = clamp(s, 0, 100) / 100;
  const brightness = clamp(v, 0, 100) / 100;
  const chroma = brightness * saturation;
  const secondary = chroma * (1 - Math.abs(hue / 60 % 2 - 1));
  const offset = brightness - chroma;
  const sectors = [[chroma, secondary, 0], [secondary, chroma, 0], [0, chroma, secondary], [0, secondary, chroma], [secondary, 0, chroma], [chroma, 0, secondary]];
  return "#" + sectors[Math.floor(hue / 60)].map(channel => Math.round((channel + offset) * 255).toString(16).padStart(2, "0")).join("").toUpperCase();
}
