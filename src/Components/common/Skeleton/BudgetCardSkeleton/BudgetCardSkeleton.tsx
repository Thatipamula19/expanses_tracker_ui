import classes from './budgetCardSkeleton.module.css';

const SkeletonCard = () => (
  <div className={classes.card}>
    <div className={`${ classes.bone} ${classes.icon}`} />
    <div className={`${classes.bone} ${classes.title}`} />
    <div className={`${classes.bone} ${classes.amount}`} />
    <div className={classes.progressTrack}>
      <div className={`${classes.bone} ${classes.progressBar}`} />
      <div className={`${classes.bone} ${classes.progressLabel}`} />
    </div>
  </div>
);

export default function BudgetCardSkeleton({ count = 6 }) {
  return (
    <div className={classes.grid}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}