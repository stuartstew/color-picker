import { useState } from "react";
import type { Hsv } from "@/shared/types/hsv";
import type { Rgb } from "@/shared/types/rgb";
import { hexToRgb, rgbToHex } from "@/shared/utils/rgb-hex";
import { hsvToRgb, rgbToHsv } from "@/shared/utils/rgb-hsv";

const MAX_HISTORY_SIZE = 100;

export const useRgb = (initialState: Rgb) => {
  const [rgb, setRgb] = useState(initialState);
  const [hsv, setHsv] = useState(rgbToHsv(initialState));
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

  const addToHistory = () => {
    setColorHistory([hex, ...colorHistory.filter((x) => x !== hex)].slice(0, MAX_HISTORY_SIZE));
    setHsv(rgbToHsv(rgb));
  };

  return { rgb, hsv, hex, colorHistory, changeRgb, changeHsv, setHex, addToHistory };
};

const rgbEqual = (x: Rgb, y: Rgb) => x.r === y.r && x.g === y.g && x.b === y.b;
const hsvEqual = (x: Hsv, y: Hsv) => x.h === y.h && x.s === y.s && x.v === y.v;
