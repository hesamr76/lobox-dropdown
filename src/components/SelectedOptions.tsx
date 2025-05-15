import type { SelectedOptionsProps } from "./types";
import styles from "../App.module.scss";

export const SelectedOptions = ({ selected }: SelectedOptionsProps) => {
  return (
    <>
      {selected.map((option) => (
        <span key={option} className={styles.selectedOption}>
          {option}
        </span>
      ))}
    </>
  );
};
