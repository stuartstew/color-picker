import { NumberInput } from "@mantine/core";
import { useState } from "react";

type Props = {
  value: number;
  onChange: (value: number) => void;
  size?: string;
  w?: string | number;
  max: number;
};

export const NonNegativeIntegerInput = ({ value, onChange, size, w, max }: Props) => {
  const [inputValue, setInputValue] = useState<number | string>("");
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setInputValue(value);
    setFocused(true);
  };

  const handleBlur = () => {
    const clampedValue = typeof inputValue === "number" ? Math.min(inputValue, max) : 0;
    onChange(clampedValue);
    setFocused(false);
  };

  return (
    <NumberInput
      value={focused ? inputValue : value}
      onChange={setInputValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      size={size}
      w={w}
      max={max}
      allowDecimal={false}
      allowLeadingZeros={false}
      allowNegative={false}
      hideControls
    />
  );
};
