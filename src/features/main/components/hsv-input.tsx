import { Stack } from "@mantine/core";
import type { Hsv } from "../types/hsv";
import { LeftLabel } from "./left-label";
import { NonNegativeIntegerInput } from "./non-negative-integer-input";

type Props = {
  value: Hsv;
  onChange: (value: Hsv) => void;
};

export const HsvInput = ({ value, onChange }: Props) => {
  const handleChangeH = (h: number) => onChange({ ...value, h });
  const handleChangeS = (s: number) => onChange({ ...value, s });
  const handleChangeV = (v: number) => onChange({ ...value, v });

  return (
    <Stack gap="xs">
      <LeftLabel label="H:" w="sm">
        <NonNegativeIntegerInput size="xs" w={64} max={359} value={value.h} onChange={handleChangeH} />
      </LeftLabel>
      <LeftLabel label="S:" w="sm">
        <NonNegativeIntegerInput size="xs" w={64} max={100} value={value.s} onChange={handleChangeS} />
      </LeftLabel>
      <LeftLabel label="V:" w="sm">
        <NonNegativeIntegerInput size="xs" w={64} max={100} value={value.v} onChange={handleChangeV} />
      </LeftLabel>
    </Stack>
  );
};
