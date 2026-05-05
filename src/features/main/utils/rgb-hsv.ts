import type { Hsv } from "../types/hsv";
import type { Rgb } from "../types/rgb";
import { isValidHsv, isValidRgb } from "./validation";

export const rgbToHsv = (rgb: Rgb): Hsv => {
  if (!isValidRgb(rgb)) throw new Error(`Invalid RGB value: ${rgb}`);

  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);

  const h = Math.round(rawHue(rgb) * 60) % 360;
  const s = max === 0 ? 0 : Math.round(((max - min) / max) * 100);
  const v = Math.round((max / 255) * 100);

  return { h, s, v };
};

const rawHue = (rgb: Rgb): number => {
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const chroma = max - min;

  if (chroma === 0) {
    return 0;
  }
  if (max === rgb.r) {
    const ret = (rgb.g - rgb.b) / chroma;
    return ret < 0 ? ret + 6 : ret;
  } else if (max === rgb.g) {
    return (rgb.b - rgb.r) / chroma + 2;
  } else {
    // max === rgb.b
    return (rgb.r - rgb.g) / chroma + 4;
  }
};

export const hsvToRgb = (hsv: Hsv): Rgb => {
  if (!isValidHsv(hsv)) throw new Error(`Invalid HSV value: ${hsv}`);

  const normalizedRgb = hsvToNormalizedRgb(hsv);
  const r = Math.round(normalizedRgb.r * 255);
  const g = Math.round(normalizedRgb.g * 255);
  const b = Math.round(normalizedRgb.b * 255);
  return { r, g, b };
};

const hsvToNormalizedRgb = (hsv: Hsv): Rgb => {
  const h = hsv.h / 60;
  const s = hsv.s / 100;
  const v = hsv.v / 100;

  const chroma = v * s;
  const max = v;
  const med = v - chroma * Math.abs((h % 2) - 1);
  const min = v - chroma;

  if (h < 1) {
    return { r: max, g: med, b: min };
  } else if (h < 2) {
    return { r: med, g: max, b: min };
  } else if (h < 3) {
    return { r: min, g: max, b: med };
  } else if (h < 4) {
    return { r: min, g: med, b: max };
  } else if (h < 5) {
    return { r: med, g: min, b: max };
  } else {
    return { r: max, g: min, b: med };
  }
};
