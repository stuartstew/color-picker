import { Stack } from "@mantine/core";
import { ColorHistoryItem } from "./components/color-history-item";
import { EmptyState } from "./components/empty-state";

type Props = {
  colorHistory: string[];
};

export const ColorHistory = ({ colorHistory }: Props) => {
  if (colorHistory.length === 0) {
    return <EmptyState />;
  } else {
    return (
      <Stack gap="xs">
        {colorHistory.map((hex) => (
          <ColorHistoryItem key={hex} hex={hex} />
        ))}
      </Stack>
    );
  }
};
