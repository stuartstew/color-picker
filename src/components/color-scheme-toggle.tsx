import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
      variant="transparent"
      size="lg"
      radius={0}
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "light" ? (
        <IconMoon style={{ height: "80%", width: "80%" }} stroke={1.5} />
      ) : (
        <IconSun style={{ height: "80%", width: "80%" }} stroke={1.5} />
      )}
    </ActionIcon>
  );
};
