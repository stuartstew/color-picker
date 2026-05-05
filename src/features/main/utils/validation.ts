import type { Hsl } from "../types/hsl";
import type { Hsv } from "../types/hsv";
import type { Rgb } from "../types/rgb";

const isNonNegativeIntegerInRange = (value: number, max: number) =>
  Number.isInteger(value) && 0 <= value && value <= max;

export const isValidRgb = (rgb: Rgb) =>
  isNonNegativeIntegerInRange(rgb.r, 255) &&
  isNonNegativeIntegerInRange(rgb.g, 255) &&
  isNonNegativeIntegerInRange(rgb.b, 255);

export const isValidHsv = (hsv: Hsv) =>
  isNonNegativeIntegerInRange(hsv.h, 359) &&
  isNonNegativeIntegerInRange(hsv.s, 100) &&
  isNonNegativeIntegerInRange(hsv.v, 100);

export const isValidHsl = (hsv: Hsl) =>
  isNonNegativeIntegerInRange(hsv.h, 359) &&
  isNonNegativeIntegerInRange(hsv.s, 100) &&
  isNonNegativeIntegerInRange(hsv.l, 100);

export const isValidHex = (hex: string) => /^[0-9a-f]{6}$/.test(hex);
