import type { DropDownProps } from "./types";

import { DropDownOption } from "./DropDownOption";

export const DropDown = ({ options, selected, onSelect }: DropDownProps) => {
  return (
    <>
      {options.map((option) => (
        <DropDownOption
          key={option.value}
          isSelected={selected.includes(option.value)}
          label={option.label}
          onClick={() => onSelect(option.value)}
        />
      ))}
    </>
  );
};
