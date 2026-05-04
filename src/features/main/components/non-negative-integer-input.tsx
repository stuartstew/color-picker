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
  const [oldValue, setOldValue] = useState(0);

  const handleFocus = () => {
    setInputValue(value);
    setOldValue(value);
    setFocused(true);
  };

  const handleBlur = () => {
    const clampedValue = typeof inputValue === "number" ? Math.min(inputValue, max) : 0;
    onChange(clampedValue);
    setFocused(false);
  };

  // Update the value when the color picker is used while this component has focus
  if (focused && value !== oldValue) {
    setInputValue(value);
    setOldValue(value);
  }

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
