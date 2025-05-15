import {
  useRef,
  useState,
  type ChangeEventHandler,
  type KeyboardEventHandler,
} from "react";
import type { MultiSelectInputProps } from "./types";
import styles from "../App.module.scss";

import { SelectedOptions } from "./SelectedOptions";

export const MultiSelectInput = ({
  onCreate,
  onOpen,
  selected,
  placeholder = "Type To Add More",
  ...inputProps
}: MultiSelectInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  const onClick = () => ref.current?.focus();

  const onFocus = onOpen;

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Enter" || !value.trim()) {
      return;
    }

    const optionValue =
      value.trim().charAt(0).toUpperCase() + value.trim().slice(1);

    setValue("");
    onCreate(optionValue);
  };

  return (
    <div className={styles.inputContainer} onClick={onClick}>
      <SelectedOptions selected={selected} />

      <input
        {...inputProps}
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
      />
    </div>
  );
};
