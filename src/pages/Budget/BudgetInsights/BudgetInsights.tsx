import React from "react";
import classes from "./budgetInsights.module.css";
import DynamicLineChart from "@/Components/common/Charts/LineChart";
import DynamicPieChart from "@/Components/common/Charts/PieChart";
import { useQuery } from "@tanstack/react-query";
import { getInsights } from "@/services/budgetService";
import { toast } from "react-toastify";

const BudgetInsights = () => {

	const { data, isLoading, error } = useQuery({
		queryKey: ["budgets-insights"],
		queryFn: async () => {
			const data = await getInsights({
				trend_months: 6
			});

			if (error) {
				toast.error(data?.error);
			}

			return data;
		},
		staleTime: 1000 * 60 * 5,
	});
	return (
		<section className={classes.budget_insights_sec}>
			<h2 className={classes.title}>Budget Insights</h2>
			<div className={classes.cards}>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Budget vs Spending Over Time</strong>
						<span>Monthly trend</span>
					</div>

					<DynamicLineChart data={data?.budget_vs_spending?.data || []} />
				</div>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Category-wise Budget Allocation</strong>
					</div>

					<DynamicPieChart data={data?.category_allocation?.data || []} />
				</div>
			</div>
		</section>
	);
};

export default BudgetInsights;
