import { Paper } from "@mantine/core";
import { ColorHistoryScrollArea } from "./color-history-scroll-area";
import { EmptyState } from "./empty-state";

type Props = {
  colorHistory: string[];
};

export const ColorHistory = ({ colorHistory }: Props) => {
  return (
    <Paper withBorder h="100%" w="100%" px="sm" py="sm">
      {colorHistory.length === 0 ? <EmptyState /> : <ColorHistoryScrollArea colorHistory={colorHistory} />}
    </Paper>
  );
};
