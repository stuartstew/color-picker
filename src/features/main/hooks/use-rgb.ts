import { useClipboard } from "@mantine/hooks";
import { useState } from "react";
import type { Rgb } from "../types/rgb";
import { hexToRgb, rgbToHex } from "../utils/rgb-hex";

const MAX_HISTORY_SIZE = 50;

export const useRgb = (initialState: Rgb) => {
  const [rgb, setRgb] = useState(initialState);
  const clipboard = useClipboard({ timeout: 500 });
  const [colorHistory, setColorHistory] = useState<string[]>([]);

  const hex = rgbToHex(rgb);
  const setHex = (value: string) => setRgb(hexToRgb(value));
  const copyHex = () => {
    clipboard.copy(hex);
    setColorHistory([hex, ...colorHistory.filter((x) => x !== hex)].slice(0, MAX_HISTORY_SIZE));
  };

  return { rgb, hex, colorHistory, copied: clipboard.copied, setRgb, setHex, copyHex };
};
