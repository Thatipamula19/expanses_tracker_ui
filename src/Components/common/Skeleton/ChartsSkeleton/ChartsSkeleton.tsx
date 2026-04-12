import classes from './chartsSkeleton.module.css';

export const LineChartSkeleton = () => (
    <div className={classes.card}>
        <div className={classes.chartBox}>
            <div className={classes.yAxis}>
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`${classes.bone} ${classes.yLabel}`} />
                ))}
            </div>

            <div className={classes.chartArea}>
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={classes.gridLine} />
                ))}

                <div className={classes.fakeLine} />
            </div>
        </div>
        <div className={classes.xAxis}>
            {[...Array(6)].map((_, i) => (
                <div key={i} className={`${classes.bone} ${classes.xLabel}`} />
            ))}
        </div>

        <div className={classes.legend}>
            {[...Array(2)].map((_, i) => (
                <div key={i} className={classes.legendItem}>
                    <div className={`${classes.bone} ${classes.legendDot}`} />
                    <div className={`${classes.bone} ${classes.legendText}`} />
                </div>
            ))}
        </div>
    </div>
);

export const PieChartSkeleton = () => (
    <div className={classes.card}>
        <div className={classes.pieWrapper}>
            <div className={`${classes.bone} ${classes.pieCircle}`} />
            <div className={classes.pieLegend}>
                {[...Array(3)].map((_, i) => (
                    <div key={i} className={classes.legendItem}>
                        <div className={`${classes.bone} ${classes.legendDot}`} />
                        <div className={`${classes.bone} ${classes.legendText}`} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);