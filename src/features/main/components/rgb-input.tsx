import { Stack } from "@mantine/core";
import type { Rgb } from "../types/rgb";
import { LeftLabel } from "./left-label";
import { NonNegativeIntegerInput } from "./non-negative-integer-input";

type Props = {
  value: Rgb;
  onChange: (value: Rgb) => void;
};

export const RgbInput = ({ value, onChange }: Props) => {
  const handleChangeR = (r: number) => onChange({ ...value, r });
  const handleChangeG = (g: number) => onChange({ ...value, g });
  const handleChangeB = (b: number) => onChange({ ...value, b });

  return (
    <Stack gap="xs">
      <LeftLabel label="R:" w="xs">
        <NonNegativeIntegerInput size="xs" w={48} max={255} value={value.r} onChange={handleChangeR} />
      </LeftLabel>
      <LeftLabel label="G:" w="xs">
        <NonNegativeIntegerInput size="xs" w={48} max={255} value={value.g} onChange={handleChangeG} />
      </LeftLabel>
      <LeftLabel label="B:" w="xs">
        <NonNegativeIntegerInput size="xs" w={48} max={255} value={value.b} onChange={handleChangeB} />
      </LeftLabel>
    </Stack>
  );
};
