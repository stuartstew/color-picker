import { ColorSwatch, Container, Divider, Group, Stack, useMantineTheme } from "@mantine/core";
import { ColorHistory } from "./components/color-history";
import { CopyButton } from "./components/copy-button";
import { HexInput } from "./components/hex-input";
import { HsvColorPicker } from "./components/hsv-color-picker";
import { HsvInput } from "./components/hsv-input";
import { LeftLabel } from "./components/left-label";
import { RgbInput } from "./components/rgb-input";
import { useRgb } from "./hooks/use-rgb";

export const ColorPicker = () => {
  const theme = useMantineTheme();

  const { rgb, hsv, hex, colorHistory, changeRgb, changeHsv, setHex, addToHistory, deleteItemFromHistory } = useRgb({
    r: 255,
    g: 0,
    b: 0,
  });

  return (
    <Container size={theme.breakpoints.xs} mt={64} mb={32}>
      <Group visibleFrom="xs" justify="center" h={224}>
        <HsvColorPicker value={hsv} onChange={changeHsv} />
        <Stack h="100%" justify="space-between" ml="xl">
          <ColorSwatch color={`#${hex}`} radius="md" w={224} h={36} />
          <Group gap="lg">
            <RgbInput value={rgb} onChange={changeRgb} />
            <HsvInput value={hsv} onChange={changeHsv} />
          </Group>
          <Group gap="xs">
            <LeftLabel label="#" w="xs">
              <HexInput size="xs" w={64} value={hex} onChange={setHex} />
            </LeftLabel>
            <CopyButton hex={hex} onCopy={addToHistory} />
          </Group>
        </Stack>
      </Group>
      <Stack hiddenFrom="xs" mx={16} gap="xl">
        <HsvColorPicker value={hsv} onChange={changeHsv} />
        <Group align="center" justify="space-between">
          <ColorSwatch color={`#${hex}`} radius="md" h={160} flex={1} />
          <Stack h="100%" w="12em" justify="space-between">
            <Group gap="lg">
              <RgbInput value={rgb} onChange={changeRgb} />
              <HsvInput value={hsv} onChange={changeHsv} />
            </Group>
            <Group gap="xs">
              <LeftLabel label="#" w="xs">
                <HexInput size="xs" w={64} value={hex} onChange={setHex} />
              </LeftLabel>
              <CopyButton hex={hex} onCopy={addToHistory} />
            </Group>
          </Stack>
        </Group>
      </Stack>
      <Divider my="xl" />
      <ColorHistory colorHistory={colorHistory} onChangeHex={setHex} onDeleteItem={deleteItemFromHistory} />
    </Container>
  );
};
