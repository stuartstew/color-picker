import { ColorSwatch, Group, Text } from "@mantine/core";
import { CopyButton } from "./copy-button";

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
      <CopyButton hex={hex} />
    </Group>
  );
};
