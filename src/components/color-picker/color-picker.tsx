import { Box, ColorSwatch, Container, Group, Stack } from "@mantine/core";
import { ColorHistory } from "./components/color-history";
import { CopyButton } from "./components/copy-button";
import { HexInput } from "./components/hex-input";
import { HsvColorPicker } from "./components/hsv-color-picker";
import { HsvInput } from "./components/hsv-input";
import { LeftLabel } from "./components/left-label";
import { RgbInput } from "./components/rgb-input";
import { useRgb } from "./hooks/use-rgb";

export const ColorPicker = () => {
  const { rgb, hsv, hex, colorHistory, copied, changeRgb, changeHsv, setHex, copyHex } = useRgb({ r: 255, g: 0, b: 0 });

  return (
    <Container size={768} py={128}>
      <Group justify="center" h={224}>
        <HsvColorPicker value={hsv} onChange={changeHsv} />
        <Stack h="100%" justify="space-between" ml="lg">
          <ColorSwatch color={`#${hex}`} radius="md" w={208} h={36} />
          <Group gap="lg">
            <RgbInput value={rgb} onChange={changeRgb} />
            <HsvInput value={hsv} onChange={changeHsv} />
          </Group>
          <Group gap="xs">
            <LeftLabel label="#" w="xs">
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
