import React from "react";

import classes from "./financialOverview.module.css";
import DynamicLineChart from "@/Components/common/Charts/LineChart";
import DynamicPieChart from "@/Components/common/Charts/PieChart";
import SimpleBarChart from "@/Components/common/Charts/BarChart";

const FinancialOverview = ({ reportData, isLoading, error }: { reportData: any; isLoading: boolean; error: any }) => {
	return (
		<section className={classes?.financial_sec}>
			<div className={classes.cards}>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Income vs Expense</strong>
						{/* <span>Monthly trend</span> */}
					</div>

					<DynamicLineChart data={reportData?.income_vs_expense?.data || []} />
				</div>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Spending by Category</strong>
					</div>

					<SimpleBarChart data={reportData?.spending_by_category?.data || []} />
				</div>
			</div>
			<div className={classes?.cards}>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Top 5 Expenses</strong>
						{/* <span>Monthly trend</span> */}
					</div>

					<DynamicPieChart data={reportData?.top_5_expenses?.data || []} />
				</div>
			</div>
		</section>
	);
};

export default FinancialOverview;
