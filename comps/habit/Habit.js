import getDaysInMonth from "../../utils/getDaysInMonth";
import Checkbox from "./Checkbox";
import styles from "./Habit.module.css";

export default function Habit(props) {
  // für desktop size nötig
  // const daysInMonth = getDaysInMonth(props.date);
  const habitCheckboxes = [];
  for (let day = 0; day < props.days; day++) {
    habitCheckboxes.push(<Checkbox />);
  }

  return (
    <tr className={styles.habit}>
      <td className={styles.habit_name}>{props.habitName}</td>
      {habitCheckboxes}
    </tr>
  );
}
