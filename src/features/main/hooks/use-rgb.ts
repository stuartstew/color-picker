import { useClipboard } from "@mantine/hooks";
import { useState } from "react";
import type { Rgb } from "../types/rgb";
import { hexToRgb, rgbToHex } from "../utils/rgb-hex";

export const useRgb = (initialState: Rgb) => {
  const [rgb, setRgb] = useState(initialState);
  const clipboard = useClipboard({ timeout: 500 });

  const hex = rgbToHex(rgb);
  const setHex = (value: string) => setRgb(hexToRgb(value));
  const copyHex = () => clipboard.copy(hex);

  return { rgb, hex, setRgb, setHex, copyHex };
};
