import styles from "./NewHabitForm.module.css";
import { AiOutlinePlus } from "react-icons/ai";

export default function NewHabitForm(props) {
  return (
    <>
      <div className={styles.modal} onClick={props.toggleNewHabitForm}></div>
      <form className={styles.form} onSubmit={props.newHabitHandler}>
        <input
          className={styles.input}
          type="text"
          id="name"
          required
          placeholder="my next habit"
        />
        <button className={styles.new_habit}>
          <AiOutlinePlus />
        </button>
      </form>
    </>
  );
}
