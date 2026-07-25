import { Button } from "@mantine/core";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react";

type Props = {
  onClick: () => void;
  copied: boolean;
};

export const CopyButton = ({ onClick, copied }: Props) => {
  const icon = copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />;
  return (
    <Button leftSection={icon} onClick={onClick} size="xs">
      {copied ? "Copied" : "Copy"}
    </Button>
  );
};
