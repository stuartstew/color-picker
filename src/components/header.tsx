import { Group, Title } from "@mantine/core";
import { ColorSchemeToggle } from "./color-scheme-toggle";

export const Header = () => {
  return (
    <Group h="100%" px="lg" justify="space-between">
      <Title order={3}>Color Picker</Title>
      <ColorSchemeToggle />
    </Group>
  );
};
