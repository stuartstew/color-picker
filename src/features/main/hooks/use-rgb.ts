import { useClipboard } from "@mantine/hooks";
import { useState } from "react";
import type { Hsv } from "../types/hsv";
import type { Rgb } from "../types/rgb";
import { hexToRgb, rgbToHex } from "../utils/rgb-hex";
import { hsvToRgb, rgbToHsv } from "../utils/rgb-hsv";

const MAX_HISTORY_SIZE = 50;

export const useRgb = (initialState: Rgb) => {
  const [rgb, setRgb] = useState(initialState);
  const [hsv, setHsv] = useState(rgbToHsv(initialState));
  const clipboard = useClipboard({ timeout: 500 });
  const [colorHistory, setColorHistory] = useState<string[]>([]);

  const changeRgb = (value: Rgb) => {
    if (!rgbEqual(value, rgb)) {
      setRgb(value);
      setHsv(rgbToHsv(value));
    }
  };

  const changeHsv = (value: Hsv) => {
    if (!hsvEqual(value, hsv)) {
      setRgb(hsvToRgb(value));
      setHsv(value);
    }
  };

  const hex = rgbToHex(rgb);
  const setHex = (value: string) => changeRgb(hexToRgb(value));
  const copyHex = () => {
    clipboard.copy(hex);
    setColorHistory([hex, ...colorHistory.filter((x) => x !== hex)].slice(0, MAX_HISTORY_SIZE));
    setHsv(rgbToHsv(rgb));
  };

  return { rgb, hsv, hex, colorHistory, copied: clipboard.copied, changeRgb, changeHsv, setHex, copyHex };
};

const rgbEqual = (x: Rgb, y: Rgb) => x.r === y.r && x.g === y.g && x.b === y.b;
const hsvEqual = (x: Hsv, y: Hsv) => x.h === y.h && x.s === y.s && x.v === y.v;
