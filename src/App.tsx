import { MultiDropDownSelect } from "./components/MultiDropDownSelect";
import styles from "./App.module.scss";
import { useState } from "react";

const options = [
  { value: "Education", label: "Education 🎓" },
  { value: "Science", label: "Science 🧪" },
  { value: "Art", label: "Art 🖼️" },
  { value: "Sport", label: "Sport ⚽" },
  { value: "Games", label: "Games 🎮" },
  { value: "Health", label: "Health 🏥" },
];

function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  return (
    <div className={styles.container}>
      <h1>Multi drop-down select component</h1>
      <MultiDropDownSelect
        options={options}
        selected={selectedIds}
        setSelected={setSelectedIds}
      />
    </div>
  );
}

export default App;
