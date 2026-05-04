import { ColorPicker as MantineColorPicker } from "@mantine/core";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const AdjustedColorPicker = ({ value, onChange }: Props) => {
  return <MantineColorPicker w={192} size="xl" value={value} onChange={onChange} />;
};
