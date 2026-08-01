import { Group, Title } from "@mantine/core";
import { ColorSchemeToggle } from "./color-scheme-toggle";
import { GithubLink } from "./github-link";

export const Header = () => {
  return (
    <Group h="100%" px="lg" justify="space-between">
      <Title order={3}>Color Picker</Title>
      <Group gap="xs">
        <GithubLink />
        <ColorSchemeToggle />
      </Group>
    </Group>
  );
};
