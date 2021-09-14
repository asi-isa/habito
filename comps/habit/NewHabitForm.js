import styles from "./NewHabitForm.module.css";

export default function NewHabitForm() {
  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.form}>
      <input type="text" id="name" />
      <button>new habit</button>
    </form>
  );
}
