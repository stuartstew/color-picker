import { Stack } from "@mantine/core";
import type { ColorHistoryItem } from "@/shared/types/color-history-item";
import { ColorHistoryItemCard } from "./components/color-history-item-card";
import { EmptyState } from "./components/empty-state";

type Props = {
  colorHistory: ColorHistoryItem[];
  onChangeHex: (hex: string) => void;
  onDeleteItem: (id: number) => void;
};

export const ColorHistory = ({ colorHistory, onChangeHex, onDeleteItem }: Props) => {
  if (colorHistory.length === 0) {
    return <EmptyState />;
  } else {
    return (
      <Stack gap="xs">
        {colorHistory.map((item) => (
          <ColorHistoryItemCard
            key={item.id}
            hex={item.hex}
            onEdit={() => onChangeHex(item.hex)}
            onDelete={() => onDeleteItem(item.id)}
          />
        ))}
      </Stack>
    );
  }
};
