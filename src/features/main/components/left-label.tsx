import { Box, Group } from "@mantine/core";

type Props = {
  label: React.ReactNode;
  w?: string | number;
  children?: React.ReactNode;
};

export const LeftLabel = ({ label, w, children }: Props) => {
  return (
    <Group component="label">
      <Box w={w}>{label}</Box>
      {children}
    </Group>
  );
};
