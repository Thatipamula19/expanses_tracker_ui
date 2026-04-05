import React from "react";
import classes from "./budgetInsights.module.css";
import DynamicLineChart from "@/Components/common/Charts/LineChart";
import DynamicPieChart from "@/Components/common/Charts/PieChart";

const BudgetInsights = () => {
	return (
		<section className={classes.budget_insights_sec}>
			<h2 className={classes.title}>Budget Insights</h2>
			<div className={classes.cards}>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Budget vs Spending Over Time</strong>
						<span>Monthly trend</span>
					</div>

					<DynamicLineChart />
				</div>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Category-wise Budget Allocation</strong>
					</div>

					<DynamicPieChart />
				</div>
			</div>
		</section>
	);
};

export default BudgetInsights;
