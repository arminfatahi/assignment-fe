import { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [helperText, setHelperText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHelperText("");
    setValue(e.target.value);
  };

  return {
    value,
    setValue,
    helperText,
    setHelperText,
    onChange,
  };
}
