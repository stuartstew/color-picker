import { ActionIcon } from "@mantine/core";
import { TrashIcon } from "@phosphor-icons/react";

type Props = {
  onClick: () => void;
};

export const DeleteButton = ({ onClick }: Props) => {
  return (
    <ActionIcon variant="default" c="red.6" radius="md" onClick={onClick} aria-label="Edit">
      <TrashIcon style={{ height: "70%", width: "70%" }} />
    </ActionIcon>
  );
};
