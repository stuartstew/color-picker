import { TextInput } from "@mantine/core";
import { isValidHex } from "@/shared/utils/validation";
import { useDraftInput } from "../hooks/use-draft-input";

type Props = {
  value: string;
  onChange: (value: string) => void;
  size?: string;
  w?: string | number;
};

export const HexInput = ({ value, onChange, size, w }: Props) => {
  const { currentValue, setDraft, focus, blur, updateDraftIfValueChanged } = useDraftInput<string>((draft) => {
    const lower = draft.trim().toLowerCase();
    if (isValidHex(lower)) {
      onChange(lower);
    }
  });

  // Updates the draft when the value of the color picker changes
  updateDraftIfValueChanged(value);

  return (
    <TextInput
      value={currentValue(value)}
      onChange={(event) => setDraft(event.currentTarget.value)}
      onFocus={() => focus(value)}
      onBlur={blur}
      size={size}
      w={w}
    />
  );
};
