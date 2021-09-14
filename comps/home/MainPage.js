import styles from "./MainPage.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { addDays } from "date-fns";
import Habit from "../habit/Habit";
import { useState } from "react";
import NewHabitForm from "../habit/NewHabitForm";

export default function MainPage() {
  const [showNewHabitForm, setShowNewHabitForm] = useState(false);
  const habits = [];
  const days = 7;
  const today = new Date();
  const nextDays = [];
  for (let _ = 0; _ < days; _++) {
    nextDays.push(
      <th className={styles.tablehead_date}>{addDays(today, _).getDate()}'</th>
    );
  }

  function toggleNewHabitForm() {
    setShowNewHabitForm(!showNewHabitForm);
  }

  return (
    <main className={styles.mainpage}>
      <table className={styles.table}>
        <tr className={styles.tablerow_head}>
          <th className={styles.tablehead}>be patient.</th>
          {nextDays}
        </tr>

        <Habit habitName="coding" days={days} />
        <Habit habitName="mobility" days={days} />
        <Habit habitName="training" days={days} />
        <Habit habitName="reading" days={days} />

        {habits}

        <tr className={styles.tablerow}>
          <td className={styles.new_habit} onClick={toggleNewHabitForm}>
            <AiOutlinePlus />
          </td>
        </tr>
      </table>

      {showNewHabitForm && <NewHabitForm />}
    </main>
  );
}
