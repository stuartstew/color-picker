import "@mantine/core/styles.css";
import { AppShell, createTheme, type MantineColorsTuple, MantineProvider } from "@mantine/core";
import { ColorPicker } from "@/components/color-picker";
import { Header } from "@/components/header";

const slate: MantineColorsTuple = [
  "#f8fafc",
  "#f1f5f9",
  "#e2e8f0",
  "#cbd5e1",
  "#94a3b8",
  "#64748b",
  "#475569",
  "#334155",
  "#1e293b",
  "#0f172a",
];

const theme = createTheme({
  colors: { slate },
  primaryColor: "slate",
  primaryShade: 5,
  white: slate[0],
  black: slate[9],
});

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 60 }}>
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <ColorPicker />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};
