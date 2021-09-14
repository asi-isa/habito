import styles from "./MainPage.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { addDays } from "date-fns";
import Habit from "../habit/Habit";

export default function MainPage() {
  const today = new Date();
  const nextDays = [];
  for (let _ = 0; _ < 7; _++) {
    nextDays.push(
      <th className={styles.tablehead_date}>{addDays(today, _).getDate()}'</th>
    );
  }

  return (
    <main className={styles.mainpage}>
      <table className={styles.table}>
        <tr className={styles.tablerow_head}>
          <th className={styles.tablehead}>be patient.</th>
          {nextDays}
        </tr>

        <Habit habitName="coding" />
        <Habit habitName="mobility" />
        <Habit habitName="training" />
        <Habit habitName="reading" />

        <tr className={styles.tablerow}>
          <td className={styles.new_habit}>
            <AiOutlinePlus />
          </td>
        </tr>
      </table>
    </main>
  );
}
