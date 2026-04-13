import classes from './transactionListSkeleton.module.css';

const SkeletonRow = () => (
  <div className={classes.row}>
    <div className={`${classes.bone} ${classes.date}`} />
    <div className={`${classes.bone} ${classes.iconCircle}`} />
    <div className={`${classes.bone} ${classes.label}`} />
    <div className={`${classes.bone} ${classes.amount}`} />
    <div className={`${classes.bone} ${classes.badge}`} />
  </div>
);

export default function TransactionListSkeleton({ count = 5 }) {
  return (
    <div className={classes.list}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonRow key={i} />
      ))}
    </div>
  );
}