import { useState } from "react";
import type { Rgb } from "../types/rgb";
import { hexToRgb, rgbToHex } from "../utils/rgb-hex";

export const useRgb = (initialState: Rgb) => {
  const [rgb, setRgb] = useState(initialState);
  const hex = rgbToHex(rgb);
  const setHex = (value: string) => setRgb(hexToRgb(value));
  return { rgb, hex, setRgb, setHex };
};
