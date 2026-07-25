import { useState } from "react";
import type { ColorHistoryItem } from "@/shared/types/color-history-item";
import type { Hsv } from "@/shared/types/hsv";
import type { Rgb } from "@/shared/types/rgb";
import { hexToRgb, rgbToHex } from "@/shared/utils/rgb-hex";
import { hsvToRgb, rgbToHsv } from "@/shared/utils/rgb-hsv";

const MAX_HISTORY_SIZE = 100;

export const useRgb = (initialState: Rgb) => {
  const [rgb, setRgb] = useState(initialState);
  const [hsv, setHsv] = useState(rgbToHsv(initialState));
  const [colorHistory, setColorHistory] = useState<ColorHistoryItem[]>([]);
  const [currentId, setCurrentId] = useState(0);

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

  const createColorHistoryItem = () => {
    setCurrentId(currentId + 1);
    return { id: currentId, hex };
  };

  const addToHistory = () => {
    const newItem = createColorHistoryItem();
    setColorHistory([newItem, ...colorHistory.filter((item) => item.hex !== hex)].slice(0, MAX_HISTORY_SIZE));
    setHsv(rgbToHsv(rgb));
  };

  const deleteItemFromHistory = (id: number) => {
    setColorHistory(colorHistory.filter((item) => item.id !== id));
  };

  return { rgb, hsv, hex, colorHistory, changeRgb, changeHsv, setHex, addToHistory, deleteItemFromHistory };
};

const rgbEqual = (x: Rgb, y: Rgb) => x.r === y.r && x.g === y.g && x.b === y.b;
const hsvEqual = (x: Hsv, y: Hsv) => x.h === y.h && x.s === y.s && x.v === y.v;
