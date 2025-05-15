import {
  useState,
  type ChangeEventHandler,
  type KeyboardEventHandler,
} from "react";
import type { MultiSelectInputProps } from "./types";
import { useOutsideClick } from "../hooks/useOutsideClick";

export const MultiSelectInput = ({
  options,
  ...inputProps
}: MultiSelectInputProps) => {
  const [dropDownOptions, setDropDownOptions] =
    useState<MultiSelectInputProps["options"]>(options);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  const openDropDown = () => {
    setIsOpen(true);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Enter" || !inputValue.trim()) {
      return;
    }

    const value =
      inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1);

    const newOption = { value, label: value + " 🆕" };

    if (!dropDownOptions.some((option) => option.value === value)) {
      setDropDownOptions((prev) => [...prev, newOption]);
    }

    setSelectedOptions((prev) => [...prev, value]);
    setInputValue("");
  };

  const toggleSelectedOption = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions((prev) => prev.filter((option) => option !== value));
    } else {
      setSelectedOptions((prev) => [...prev, value]);
    }
  };

  const ref = useOutsideClick(closeDropDown);

  return (
    <div ref={ref}>
      <input
        {...inputProps}
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={openDropDown}
      />

      {isOpen &&
        [...dropDownOptions].map((option) => (
          <DropDownOption
            key={option.value}
            isSelected={selectedOptions.includes(option.value)}
            label={option.label}
            onClick={() => toggleSelectedOption(option.value)}
          />
        ))}
    </div>
  );
};

const DropDownOption = ({
  isSelected,
  label,
  onClick,
}: {
  isSelected: boolean;
  label: string;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick}>
      {isSelected && "Yeeeah,"} {label}
    </div>
  );
};
