import { useState } from "react";
import styles from "./Checkbox.module.css";

export default function Checkbox() {
  const [isDone, setIsDone] = useState(false);
  function toggleCheckbox() {
    setIsDone(!isDone);
  }
  return (
    <td
      className={`${styles.habit_cb} ${isDone && styles.done}`}
      onClick={toggleCheckbox}
    ></td>
  );
}
