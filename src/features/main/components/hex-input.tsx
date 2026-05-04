import { TextInput } from "@mantine/core";
import { useState } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  size?: string;
  w?: string | number;
};

export const HexInput = ({ value, onChange, size, w }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [oldValue, setOldValue] = useState("");

  const handleFocus = () => {
    setInputValue(value);
    setOldValue(value);
    setFocused(true);
  };

  const handleBlur = () => {
    const lower = inputValue.trim().toLowerCase();
    if (/^[0-9a-f]{6}$/.test(lower)) {
      onChange(lower);
    }
    setFocused(false);
  };

  // Update the value when the color picker is used while this component has focus
  if (focused && value !== oldValue) {
    setInputValue(value);
    setOldValue(value);
  }

  return (
    <TextInput
      value={focused ? inputValue : value}
      onChange={(event) => setInputValue(event.currentTarget.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      size={size}
      w={w}
    />
  );
};
