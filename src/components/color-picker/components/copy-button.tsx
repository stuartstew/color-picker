import { Button } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react";

type Props = {
  hex: string;
  onCopy: (hex: string) => void;
};

export const CopyButton = ({ hex, onCopy }: Props) => {
  const { copy, copied } = useClipboard({ timeout: 500 });
  const handleClick = () => {
    copy(hex);
    onCopy(hex);
  };

  const icon = copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />;
  return (
    <Button leftSection={icon} onClick={handleClick} size="xs">
      {copied ? "Copied" : "Copy"}
    </Button>
  );
};
