import { ColorPicker } from "@mantine/core";
import type { Hsv } from "../types/hsv";
import { formatHsl, hslToHsv, hsvToHsl, parseHsl } from "../utils/hsl";

type Props = {
  value: Hsv;
  onChange: (value: Hsv) => void;
};

export const HsvColorPicker = ({ value, onChange }: Props) => {
  const hslValue = formatHsl(hsvToHsl(value));
  const handleChange = (hslValue: string) => {
    const hsv = hslToHsv(parseHsl(hslValue));
    hsv.h = Math.min(hsv.h, 359);
    onChange(hsv);
  };
  return <ColorPicker format="hsl" w={192} size="xl" value={hslValue} onChange={handleChange} />;
};
