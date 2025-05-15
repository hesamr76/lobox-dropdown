import styles from "../App.module.scss";

export const DropDownOption = ({
  isSelected,
  label,
  onClick,
}: {
  isSelected: boolean;
  label: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.dropdownOption} ${isSelected && styles.selected}`}
    >
      <span>
        {isSelected && "Yeeeah,"} {label}
      </span>
      {isSelected && <span className={styles.check}>✔</span>}{" "}
    </div>
  );
};
