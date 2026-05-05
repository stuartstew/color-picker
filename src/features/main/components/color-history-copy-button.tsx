import { ActionIcon } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { IconCheck, IconCopy } from "@tabler/icons-react";

type Props = {
  hex: string;
};

export const ColorHistoryCopyButton = ({ hex }: Props) => {
  const clipboard = useClipboard({ timeout: 500 });
  const icon = clipboard.copied ? (
    <IconCheck style={{ height: "70%", width: "70%" }} stroke={1.5} />
  ) : (
    <IconCopy style={{ height: "70%", width: "70%" }} stroke={1.5} />
  );

  return (
    <ActionIcon variant="default" onClick={() => clipboard.copy(hex)}>
      {icon}
    </ActionIcon>
  );
};
