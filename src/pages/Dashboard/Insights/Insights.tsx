import classes from "./insights.module.css";
import DynamicLineChart from "@/Components/common/Charts/LineChart";
import DynamicPieChart from "@/Components/common/Charts/PieChart";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getOverview } from "@/services/transactionService";

const Insights = () => {

	const { data, error } = useQuery({
		queryKey: ["transactions-insights"],
		queryFn: async () => {
			const data = await getOverview({
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
			<h2 className={classes.title}>Spending Overview</h2>
			<div className={classes.cards}>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Income vs Expense</strong>
						{/* <span>Monthly trend</span> */}
					</div>

					<DynamicLineChart data={data?.income_vs_expense?.data || []} chartKeys={data?.income_vs_expense?.chart_keys} />
				</div>
				<div className={classes.card}>
					<div className={classes.card_header}>
						<strong>Expense Breakdown</strong>
					</div>

					<DynamicPieChart data={data?.expense_breakdown?.data || []} />
				</div>
			</div>
		</section>
	);
};

export default Insights;
