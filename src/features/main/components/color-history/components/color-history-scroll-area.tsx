import { Divider, ScrollArea } from "@mantine/core";
import { ColorHistoryItem } from "./color-history-item";

type Props = {
  colorHistory: string[];
};

export const ColorHistoryScrollArea = ({ colorHistory }: Props) => {
  return (
    <ScrollArea h="100%" offsetScrollbars>
      {colorHistory.map((hex, i) => (
        <>
          {i > 0 && <Divider my="sm" />}
          <ColorHistoryItem hex={hex} />
        </>
      ))}
    </ScrollArea>
  );
};
