import { ColorSwatch, Container, Group, Stack } from "@mantine/core";
import { useRgb } from "../hooks/use-rgb";
import { AdjustedColorPicker } from "./adjusted-color-picker";
import { HexInput } from "./hex-input";
import { LeftLabel } from "./left-label";
import { RgbInput } from "./rgb-input";

export const Main = () => {
  const { rgb, hex, setRgb, setHex } = useRgb({ r: 255, g: 0, b: 0 });

  return (
    <Container size={768} py={128}>
      <Group justify="center" gap="xl" h={224}>
        <AdjustedColorPicker value={`#${hex}`} onChange={(value) => setHex(value.replace("#", ""))} />
        <Stack h="100%" justify="space-between" w={256}>
          <ColorSwatch color={`#${hex}`} radius="md" w={224} h={36} />
          <RgbInput value={rgb} onChange={setRgb} />
          <LeftLabel label="#" w="sm">
            <HexInput size="xs" w={64} value={hex} onChange={setHex} />
          </LeftLabel>
        </Stack>
      </Group>
    </Container>
  );
};
