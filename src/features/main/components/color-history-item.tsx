import { ColorSwatch, Group, Text } from "@mantine/core";
import { ColorHistoryCopyButton } from "./color-history-copy-button";

type Props = {
  hex: string;
};

export const ColorHistoryItem = ({ hex }: Props) => {
  const hexWithHash = `#${hex}`;
  return (
    <Group justify="space-between">
      <Group>
        <ColorSwatch color={hexWithHash} size={20} />
        <Text>{hexWithHash}</Text>
      </Group>
      <ColorHistoryCopyButton hex={hex} />
    </Group>
  );
};
