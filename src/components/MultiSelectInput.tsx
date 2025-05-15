import {
  useState,
  type ChangeEventHandler,
  type KeyboardEventHandler,
} from "react";
import type { MultiSelectInputProps } from "./types";

export const MultiSelectInput = ({
  options,
  ...inputProps
}: MultiSelectInputProps) => {
  const [dropDownOptions, setDropDownOptions] =
    useState<MultiSelectInputProps["options"]>(options);

  const [inputValue, setInputValue] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setInputValue(e.target.value);

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    const value =
      inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1);

    if (!dropDownOptions.some((option) => option.value === value)) {
      const newOption = { value, label: value + " 🆕" };
      setDropDownOptions((prev) => [...prev, newOption]);
    }

    setInputValue("");
  };

  return (
    <div>
      <input
        {...inputProps}
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      {[...dropDownOptions].map((option) => (
        <div key={option.value}>{option.label}</div>
      ))}
    </div>
  );
};
