import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import { Header } from "@/features/header";
import { Main } from "@/features/main";

export const App = () => {
  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }}>
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Main />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};
