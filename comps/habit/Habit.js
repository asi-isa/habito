import getDaysInMonth from "../../utils/getDaysInMonth";
import Checkbox from "./Checkbox";
import styles from "./Habit.module.css";

export default function Habit(props) {
  // für desktop size nötig
  const daysInMonth = getDaysInMonth(props.date);
  const habitCheckboxes = [];

  // for small screen sizes: 7
  for (let day = 0; day < 7; day++) {
    habitCheckboxes.push(<Checkbox />);
  }

  return (
    <tr className={styles.habit}>
      <td className={styles.habit_name}>{props.habitName}</td>
      {habitCheckboxes}
    </tr>
  );
}
