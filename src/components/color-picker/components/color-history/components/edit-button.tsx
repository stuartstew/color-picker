import { ActionIcon } from "@mantine/core";
import { PencilSimpleIcon } from "@phosphor-icons/react";

type Props = {
  onClick: () => void;
};

export const EditButton = ({ onClick }: Props) => {
  return (
    <ActionIcon variant="default" radius="md" onClick={onClick} aria-label="Delete">
      <PencilSimpleIcon style={{ height: "70%", width: "70%" }} />
    </ActionIcon>
  );
};
