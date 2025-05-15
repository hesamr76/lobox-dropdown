import type { DropDownProps } from "../../../../types";

import { DropDownOption } from "./DropDownOption";
import styles from "./DropDown.module.scss";

export const DropDown = ({ options, selected, onSelect }: DropDownProps) => {
  return (
    <div className={styles.dropdown}>
      {options.map((option) => (
        <DropDownOption
          key={option.value}
          isSelected={selected.includes(option.value)}
          label={option.label}
          onClick={() => onSelect(option.value)}
        />
      ))}
    </div>
  );
};
