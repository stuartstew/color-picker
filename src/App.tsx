import "@mantine/core/styles.css";
import { Button, MantineProvider } from "@mantine/core";

export const App = () => {
  return (
    <MantineProvider>
      <Button>Hello world</Button>
    </MantineProvider>
  );
};
