import type { InputHTMLAttributes } from "react";

export type SelectOption = {
  value: string;
  label: string;
};

type MultiSelectProps = {
  options: Array<SelectOption>;
};

export type MultiSelectInputProps = InputHTMLAttributes<HTMLInputElement> &
  MultiSelectProps;
