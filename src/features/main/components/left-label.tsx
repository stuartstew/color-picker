import { Box, Group } from "@mantine/core";

type Props = {
  label: React.ReactNode;
  w?: string | number;
  children?: React.ReactNode;
};

export const LeftLabel = ({ label, w, children }: Props) => {
  return (
    <Group>
      <Box w={w}>{label}</Box>
      {children}
    </Group>
  );
};
