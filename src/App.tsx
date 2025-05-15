import { MultiSelectInput } from "./components/MultiSelectInput";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <h1>Multi Select Dropdown</h1>
      <MultiSelectInput />
    </div>
  );
}

export default App;
