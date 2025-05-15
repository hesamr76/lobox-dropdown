import { useState } from "react";

import type { MultiDropDownSelectProps } from "./types";
import { useOutsideClick, useIsOpen } from "../hooks";

import { MultiSelectInput } from "./MultiSelectInput";
import { DropDown } from "./DropDown";

import styles from "../App.module.scss";

export const MultiDropDownSelect = ({
  options: initialOptions,
  selected: initialSelected = [],
  setSelected: setSelectedIds,
  ...inputProps
}: MultiDropDownSelectProps) => {
  const [options, setOptions] = useState(initialOptions);
  const [selected, setSelected] = useState<string[]>(initialSelected);

  const { isOpen, onOpen, onClose } = useIsOpen();
  const ref = useOutsideClick(onClose);

  const onCreate = (optionValue: string) => {
    const newOption = { value: optionValue, label: optionValue + " 🆕" };

    if (!options.some((option) => option.value === optionValue)) {
      setOptions((prev) => [...prev, newOption]);
    }

    if (!selected.includes(optionValue)) {
      setSelected((prev) => {
        const next = [...prev, optionValue];
        setSelectedIds?.(next);
        return next;
      });
    }
  };

  const onSelect = (value: string) => {
    let newSelected = [];
    if (selected.includes(value)) {
      newSelected = selected.filter((option) => option !== value);
    } else {
      newSelected = [...selected, value];
    }

    setSelected(newSelected);
    setSelectedIds?.(newSelected);
  };

  return (
    <div ref={ref} className={styles.MultiDropDownSelect}>
      <MultiSelectInput
        {...inputProps}
        selected={selected}
        onOpen={onOpen}
        onCreate={onCreate}
      />

      {isOpen && (
        <DropDown options={options} selected={selected} onSelect={onSelect} />
      )}
    </div>
  );
};
