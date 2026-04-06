import React from "react";

import classes from "./financialOverview.module.css";
import DynamicLineChart from "@/Components/common/Charts/LineChart";
import DynamicPieChart from "@/Components/common/Charts/PieChart";

const FinancialOverview = () => {
	return (
		<section className={classes?.financial_sec}>
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
			<div className={classes?.cards}>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Budget vs Spending Over Time</strong>
						<span>Monthly trend</span>
					</div>

					<DynamicLineChart />
				</div>
			</div>
		</section>
	);
};

export default FinancialOverview;
