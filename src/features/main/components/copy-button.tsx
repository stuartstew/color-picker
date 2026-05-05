import { Button } from "@mantine/core";
import { IconCopy } from "@tabler/icons-react";

type Props = {
  onClick: () => void;
};

export const CopyButton = ({ onClick }: Props) => {
  return (
    <Button leftSection={<IconCopy size={14} />} onClick={onClick} size="xs">
      Copy
    </Button>
  );
};
