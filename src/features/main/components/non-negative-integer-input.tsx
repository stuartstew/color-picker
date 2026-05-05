import { NumberInput } from "@mantine/core";
import { useDraftInput } from "../hooks/use-draft-input";

type Props = {
  value: number;
  onChange: (value: number) => void;
  size?: string;
  w?: string | number;
  max: number;
};

export const NonNegativeIntegerInput = ({ value, onChange, size, w, max }: Props) => {
  const { currentValue, setDraft, focus, blur, updateDraftIfValueChanged } = useDraftInput<string | number>((draft) => {
    const clampedValue = typeof draft === "number" ? Math.min(draft, max) : 0;
    onChange(clampedValue);
  });

  // Updates the draft when the value of the color picker changes
  updateDraftIfValueChanged(value);

  return (
    <NumberInput
      value={currentValue(value)}
      onChange={setDraft}
      onFocus={() => focus(value)}
      onBlur={blur}
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
