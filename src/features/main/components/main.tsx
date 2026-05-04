import { ColorSwatch, Container, Group } from "@mantine/core";
import { useRgb } from "../hooks/use-rgb";
import { AdjustedColorPicker } from "./adjusted-color-picker";

export const Main = () => {
  const { hex, setHex } = useRgb({ r: 255, g: 0, b: 0 });

  return (
    <Container size={768} py={128}>
      <Group justify="center" gap="xl">
        <AdjustedColorPicker value={`#${hex}`} onChange={(value) => setHex(value.replace("#", ""))} />
        <ColorSwatch color={`#${hex}`} radius="md" w={224} h={36} />
      </Group>
    </Container>
  );
};
