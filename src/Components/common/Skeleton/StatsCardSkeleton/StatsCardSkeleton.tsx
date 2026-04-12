import classes from './statsCardSkeleton.module.css';

const SkeletonCard = () => (
  <div className={classes.card}>
    <div className={`${classes.bone} ${classes.title}`} />
    <div className={`${classes.bone} ${classes.value}`} />
    <div className={`${classes.bone} ${classes.change}`} />
  </div>
);

export default function StatsCardSkeleton({ count = 4 }) {
  return (
    <div className={classes.grid}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={`skeleton-card-${i}`} />
      ))}
    </div>
  );
}