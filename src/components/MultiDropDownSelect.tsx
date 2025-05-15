import { useState } from "react";
import type { MultiDropDownSelectProps } from "./types";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { MultiSelectInput } from "./MultiSelectInput";

import { DropDown } from "./DropDown";
import { useIsOpen } from "../hooks/useIsOpen";

export const MultiDropDownSelect = ({
  options: initialOptions,
}: MultiDropDownSelectProps) => {
  const [options, setOptions] = useState(initialOptions);
  const [selected, setSelected] = useState<string[]>([]);

  const { isOpen, onOpen, onClose } = useIsOpen();
  const ref = useOutsideClick(onClose);

  const onCreate = (optionValue: string) => {
    const newOption = { value: optionValue, label: optionValue + " 🆕" };

    if (!options.some((option) => option.value === optionValue)) {
      setOptions((prev) => [...prev, newOption]);
    }

    setSelected((prev) => [...prev, optionValue]);
  };

  const onSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected((prev) => prev.filter((option) => option !== value));
    } else {
      setSelected((prev) => [...prev, value]);
    }
  };

  return (
    <div ref={ref}>
      <MultiSelectInput onOpen={onOpen} onCreate={onCreate} />

      {isOpen && (
        <DropDown options={options} selected={selected} onSelect={onSelect} />
      )}
    </div>
  );
};
