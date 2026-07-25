import { Center, Stack, Text } from "@mantine/core";
import { IconHistory } from "@tabler/icons-react";

export const EmptyState = () => {
  return (
    <Center h="100%">
      <Stack align="center" gap="xs">
        <IconHistory size={40} color="var(--mantine-color-dimmed)" />
        <Text c="dimmed">No history found</Text>
      </Stack>
    </Center>
  );
};
