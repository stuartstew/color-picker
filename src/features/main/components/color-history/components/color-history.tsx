import { Divider, Paper, ScrollArea } from "@mantine/core";
import { ColorHistoryItem } from "./color-history-item";

type Props = {
  colorHistory: string[];
};

export const ColorHistory = ({ colorHistory }: Props) => {
  return (
    <Paper withBorder h="100%" w="100%" px="sm" py="sm">
      <ScrollArea h="100%" offsetScrollbars>
        {colorHistory.map((hex, i) => (
          <>
            {i > 0 && <Divider my="sm" />}
            <ColorHistoryItem hex={hex} />
          </>
        ))}
      </ScrollArea>
    </Paper>
  );
};
