import { ActionIcon } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react";

type Props = {
  hex: string;
};

export const CopyButton = ({ hex }: Props) => {
  const clipboard = useClipboard({ timeout: 500 });
  const icon = clipboard.copied ? (
    <CheckIcon style={{ height: "70%", width: "70%" }} />
  ) : (
    <CopyIcon style={{ height: "70%", width: "70%" }} />
  );

  return (
    <ActionIcon variant="default" radius="md" onClick={() => clipboard.copy(hex)}>
      {icon}
    </ActionIcon>
  );
};
