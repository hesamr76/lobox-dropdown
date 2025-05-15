import type { InputHTMLAttributes } from "react";

type SelectOption = {
  value: string;
  label: string;
};

export type DropDownProps = {
  options: SelectOption[];
  selected: string[];
  onSelect: (optionValue: string) => void;
};

export type MultiSelectInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onOpen: () => void;
  onCreate: (value: string) => void;
};

export type MultiDropDownSelectProps = { options: DropDownProps["options"] };
