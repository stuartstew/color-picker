import { Box, ColorSwatch, Container, Group, Stack } from "@mantine/core";
import { useRgb } from "../hooks/use-rgb";
import { AdjustedColorPicker } from "./adjusted-color-picker";
import { ColorHistory } from "./color-history";
import { CopyButton } from "./copy-button";
import { HexInput } from "./hex-input";
import { LeftLabel } from "./left-label";
import { RgbInput } from "./rgb-input";

export const Main = () => {
  const { rgb, hex, colorHistory, copied, setRgb, setHex, copyHex } = useRgb({ r: 255, g: 0, b: 0 });

  return (
    <Container size={768} py={128}>
      <Group justify="center" h={224}>
        <AdjustedColorPicker value={`#${hex}`} onChange={(value) => setHex(value.replace("#", ""))} />
        <Stack h="100%" justify="space-between" ml="lg">
          <ColorSwatch color={`#${hex}`} radius="md" w={224} h={36} />
          <RgbInput value={rgb} onChange={setRgb} />
          <Group gap="xs">
            <LeftLabel label="#" w="sm">
              <HexInput size="xs" w={64} value={hex} onChange={setHex} />
            </LeftLabel>
            <CopyButton onClick={copyHex} copied={copied} />
          </Group>
        </Stack>
        <Box ml="lg" h="100%" style={{ flex: 1 }}>
          <ColorHistory colorHistory={colorHistory} />
        </Box>
      </Group>
    </Container>
  );
};
