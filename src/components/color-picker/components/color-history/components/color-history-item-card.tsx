import { ColorSwatch, Group, Paper, Text } from "@mantine/core";
import { CopyButton } from "./copy-button";
import { DeleteButton } from "./delete-button";
import { EditButton } from "./edit-button";

type Props = {
  hex: string;
  onEdit: () => void;
  onDelete: () => void;
};

export const ColorHistoryItemCard = ({ hex, onEdit, onDelete }: Props) => {
  const hexWithHash = `#${hex}`;
  return (
    <Paper radius="lg" shadow="xs" withBorder p="md">
      <Group justify="space-between">
        <Group>
          <ColorSwatch color={hexWithHash} size={20} />
          <Text fw={500}>{hexWithHash}</Text>
        </Group>
        <Group gap="xs">
          <CopyButton hex={hex} />
          <EditButton onClick={onEdit} />
          <DeleteButton onClick={onDelete} />
        </Group>
      </Group>
    </Paper>
  );
};
