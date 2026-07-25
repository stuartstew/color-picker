import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import { ColorPicker } from "@/components/color-picker";
import { Header } from "@/components/header";

export const App = () => {
  return (
    <MantineProvider>
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
