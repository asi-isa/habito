import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <main className={styles.mainpage}>
      <table className={styles.table}>
        <tr className={styles.tablerow_head}>
          <th className={styles.tablehead}>be patient.</th>
          <th className={styles.tablehead_date}>30'</th>
          <th className={styles.tablehead_date}>01'</th>
          <th className={styles.tablehead_date}>02'</th>
          <th className={styles.tablehead_date}>02'</th>
          <th className={styles.tablehead_date}>02'</th>
          <th className={styles.tablehead_date}>02'</th>
          <th className={styles.tablehead_date}>02'</th>
          <th className={styles.tablehead_date}>02'</th>
        </tr>
        <tr className={styles.tablerow}>
          <td className={styles.tabledata_desc}>mobility</td>
          <td className={`${styles.tabledata} ${styles.done}`}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={`${styles.tabledata} ${styles.done}`}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
        </tr>
        <tr className={styles.tablerow}>
          <td className={styles.tabledata_desc}>reading</td>
          <td className={`${styles.tabledata} ${styles.done}`}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={`${styles.tabledata} ${styles.done}`}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
        </tr>
        <tr className={styles.tablerow}>
          <td className={styles.tabledata_desc}>studying</td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
          <td className={styles.tabledata}></td>
        </tr>
      </table>
    </main>
  );
}
