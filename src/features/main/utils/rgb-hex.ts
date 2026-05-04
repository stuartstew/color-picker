import type { Rgb } from "../types/rgb";

const paddedHex = (x: number) => x.toString(16).padStart(2, "0");

const isValidRgbValue = (x: number) => Number.isInteger(x) && 0 <= x && x <= 255;

export const rgbToHex = (rgb: Rgb): string => {
  if (!isValidRgbValue(rgb.r)) throw new Error(`Invalid R value: ${rgb.r}`);
  if (!isValidRgbValue(rgb.g)) throw new Error(`Invalid G value: ${rgb.g}`);
  if (!isValidRgbValue(rgb.b)) throw new Error(`Invalid B value: ${rgb.b}`);
  return paddedHex(rgb.r) + paddedHex(rgb.g) + paddedHex(rgb.b);
};

export const hexToRgb = (hex: string): Rgb => {
  if (!/^[0-9a-f]{6}$/.test(hex)) throw new Error(`Invalid hex value: ${hex}`);
  const r = Number.parseInt(hex.substring(0, 2), 16);
  const g = Number.parseInt(hex.substring(2, 4), 16);
  const b = Number.parseInt(hex.substring(4, 6), 16);
  return { r, g, b };
};
