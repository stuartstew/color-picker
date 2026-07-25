import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import { Header } from "@/components/header";
import { ColorPicker } from "@/components/color-picker";

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
