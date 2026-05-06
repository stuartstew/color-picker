import { ColorPicker } from "@mantine/core";
import type { Hsv } from "@/shared/types/hsv";
import { formatHsl, hslToHsv, hsvToHsl, parseHsl } from "@/shared/utils/hsl";
import classes from "./hsv-color-picker.module.css";

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
  const classNames = {
    wrapper: classes.wrapper,
    saturation: classes.saturation,
  };
  return (
    <ColorPicker format="hsl" value={hslValue} onChange={handleChange} size="lg" fullWidth classNames={classNames} />
  );
};
