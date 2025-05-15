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
    <div onClick={onClick}>
      {isSelected && "Yeeeah,"} {label}
    </div>
  );
};
