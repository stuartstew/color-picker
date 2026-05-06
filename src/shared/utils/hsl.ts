import type { Hsl } from "@/shared/types/hsl";
import type { Hsv } from "@/shared/types/hsv";
import { isValidHsl, isValidHsv } from "./validation";

export const formatHsl = (hsl: Hsl) => `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

export const parseHsl = (value: string): Hsl => {
  const matches = value.match(/hsl\(([0-9]+), ([0-9]+)%, ([0-9]+)%\)/);
  if (matches == null) {
    throw new Error(`Failed to parse HSL value: ${value}`);
  }
  const [_, h, s, l] = matches;
  return { h: Number(h), s: Number(s), l: Number(l) };
};

export const hslToHsv = (hsl: Hsl): Hsv => {
  if (!isValidHsl(hsl)) throw new Error(`Invalid HSL value: ${hsl}`);

  const sHsl = hsl.s / 100;
  const l = hsl.l / 100;
  const chroma = sHsl * (1 - Math.abs(2 * l - 1));
  const v = l + chroma / 2;
  const sHsv = v === 0 ? 0 : chroma / v;
  return {
    h: hsl.h,
    s: Math.round(sHsv * 100),
    v: Math.round(v * 100),
  };
};

export const hsvToHsl = (hsv: Hsv): Hsl => {
  if (!isValidHsv(hsv)) throw new Error(`Invalid HSV value: ${hsv}`);

  const sHsv = hsv.s / 100;
  const v = hsv.v / 100;
  const chroma = sHsv * v;
  const l = v - chroma / 2;
  const sHsl = l === 0 || l === 1 ? 0 : chroma / (1 - Math.abs(2 * l - 1));
  return {
    h: hsv.h,
    s: Math.round(sHsl * 100),
    l: Math.round(l * 100),
  };
};
