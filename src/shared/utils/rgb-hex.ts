import type { Rgb } from "@/shared/types/rgb";
import { isValidHex, isValidRgb } from "./validation";

const paddedHex = (x: number) => x.toString(16).padStart(2, "0");

export const rgbToHex = (rgb: Rgb): string => {
  if (!isValidRgb(rgb)) throw new Error(`Invalid RGB value: ${rgb}`);
  return paddedHex(rgb.r) + paddedHex(rgb.g) + paddedHex(rgb.b);
};

export const hexToRgb = (hex: string): Rgb => {
  if (!isValidHex(hex)) throw new Error(`Invalid HEX value: ${hex}`);
  const r = Number.parseInt(hex.substring(0, 2), 16);
  const g = Number.parseInt(hex.substring(2, 4), 16);
  const b = Number.parseInt(hex.substring(4, 6), 16);
  return { r, g, b };
};
