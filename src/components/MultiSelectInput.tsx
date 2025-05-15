import {
  useState,
  type ChangeEventHandler,
  type KeyboardEventHandler,
} from "react";
import type { MultiSelectInputProps } from "./types";

export const MultiSelectInput = ({
  onCreate,
  onOpen,
  ...inputProps
}: MultiSelectInputProps) => {
  const [value, setValue] = useState("");

  const onFocus = onOpen;

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Enter" || !value.trim()) {
      return;
    }

    const optionValue =
      value.trim().charAt(0).toUpperCase() + value.trim().slice(1);

    setValue("");
    onCreate(optionValue);
  };

  return (
    <input
      {...inputProps}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
    />
  );
};
