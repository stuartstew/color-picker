import { Button } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

type Props = {
  onClick: () => void;
  copied: boolean;
};

export const CopyButton = ({ onClick, copied }: Props) => {
  const icon = copied ? <IconCheck size={14} /> : <IconCopy size={14} />;
  return (
    <Button leftSection={icon} onClick={onClick} size="xs">
      {copied ? "Copied" : "Copy"}
    </Button>
  );
};
