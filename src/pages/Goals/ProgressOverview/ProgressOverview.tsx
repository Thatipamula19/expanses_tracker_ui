import DynamicBarChart from "@/Components/common/Charts/BarChart";
import DynamicPieChart from "@/Components/common/Charts/PieChart";
import classes from "./progressOverview.module.css";

const ProgressOverview = () => {
	return (
		<section className={classes.progress_overview_sec}>
			<h2 className={classes.title}>Goal Progress Overview</h2>
			<div className={classes.cards}>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Goal Progress</strong>
						{/* <span>Monthly trend</span> */}
					</div>

					<DynamicBarChart />
				</div>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Completed vs Ongoing Goals</strong>
					</div>
					<DynamicPieChart />
				</div>
			</div>
		</section>
	);
};

export default ProgressOverview;
