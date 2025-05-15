import type { InputHTMLAttributes } from "react";

type MultiSelectProps = InputHTMLAttributes<HTMLInputElement>;

export const MultiSelectInput = ({ ...inputProps }: MultiSelectProps) => {
  return <input {...inputProps}></input>;
};
