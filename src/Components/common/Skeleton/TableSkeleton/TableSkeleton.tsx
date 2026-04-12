import styles from './tableSkeleton.module.css';

const SkeletonRow = () => (
  <tr className={styles.row}>
    <td className={styles.cell}>
      <div className={`${styles.bone} ${styles.date}`} />
    </td>

    <td className={styles.cell}>
      <div className={styles.categoryCell}>
        <div className={`${styles.bone} ${styles.iconCircle}`} />
        <div className={`${styles.bone} ${styles.categoryName}`} />
      </div>
    </td>

    <td className={styles.cell}>
      <div className={`${styles.bone} ${styles.amount}`} />
    </td>

    <td className={styles.cell}>
      <div className={`${styles.bone} ${styles.amount}`} />
    </td>

    <td className={styles.cell}>
      <div className={`${styles.bone} ${styles.amount}`} />
    </td>

    <td className={styles.cell}>
      <div className={styles.progressCell}>
        <div className={`${styles.bone} ${styles.progressBar}`} />
        <div className={`${styles.bone} ${styles.progressLabel}`} />
      </div>
    </td>

    <td className={styles.cell}>
      <div className={styles.actions}>
        <div className={`${styles.bone} ${styles.actionBtn}`} />
        <div className={`${styles.bone} ${styles.actionBtn}`} />
      </div>
    </td>
  </tr>
);

export default function TableSkeleton({ count = 5 }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            {['Date', 'Category', 'Limit', 'Spent', 'Remaining', 'Progress', 'Actions'].map((h) => (
              <th key={h} className={styles.th}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: count }).map((_, i) => (
            <SkeletonRow key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}