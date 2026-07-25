import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

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
        <MoonIcon style={{ height: "70%", width: "70%" }} />
      ) : (
        <SunIcon style={{ height: "70%", width: "70%" }} />
      )}
    </ActionIcon>
  );
};
