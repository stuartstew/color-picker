import { Group, Text } from "@mantine/core";

type Props = {
  label: React.ReactNode;
  w?: string | number;
  children?: React.ReactNode;
};

export const LeftLabel = ({ label, w, children }: Props) => {
  return (
    <Group component="label">
      <Text w={w} fw={500}>
        {label}
      </Text>
      {children}
    </Group>
  );
};
