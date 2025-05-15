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

export type SelectedOptionsProps = {
  selected: string[];
};

export type MultiSelectInputProps = InputHTMLAttributes<HTMLInputElement> &
  SelectedOptionsProps & {
    onOpen: () => void;
    onCreate: (value: string) => void;
  };

export type MultiDropDownSelectProps = InputHTMLAttributes<HTMLInputElement> & {
  options: DropDownProps["options"];
  selected?: string[];
  setSelected?: (selectedIds: string[]) => void;
};
