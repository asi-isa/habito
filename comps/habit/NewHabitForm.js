import styles from "./NewHabitForm.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function NewHabitForm(props) {
  return (
    <form className={styles.form} onSubmit={props.newHabitHandler}>
      <AiOutlineClose
        className={styles.close}
        onClick={props.toggleNewHabitForm}
      />
      <input type="text" id="name" required placeholder="my next habit" />
      <button className={styles.btn}>new habit</button>
    </form>
  );
}
