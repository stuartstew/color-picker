import { ColorSwatch, Group, Paper, Text } from "@mantine/core";
import { CopyButton } from "./copy-button";

type Props = {
  hex: string;
};

export const ColorHistoryItemCard = ({ hex }: Props) => {
  const hexWithHash = `#${hex}`;
  return (
    <Paper radius="lg" shadow="xs" withBorder p="md">
      <Group justify="space-between">
        <Group>
          <ColorSwatch color={hexWithHash} size={20} />
          <Text fw={500}>{hexWithHash}</Text>
        </Group>
        <CopyButton hex={hex} />
      </Group>
    </Paper>
  );
};
