import classes from "./stats.module.css";
import ProgressBar from "@/Components/common/ProgressBar/ProgressBar";
import { useQuery } from "@tanstack/react-query";
import { getBudgetStatistics } from "@/services/budgetService";
import useBudgetStore from "@/store/useBudgetStore";
import AppConstants from "@/utils/AppConstants";

const Stats = () => {
	const { date } = useBudgetStore();
	const { data } = useQuery({
		queryKey: ["status", date?.value],
		queryFn: async () => {
			const data = await getBudgetStatistics({
				period: date?.value,
			});
			return data;
		},
		staleTime: 1000 * 60 * 60, // 1 hour
	});
	const { total_budget, total_spent, remaining } = data || {};
	return (
		<>
				<section className={classes?.status_sec}>
			<ul className={classes?.status_list}>
				<li className={classes?.status_item}>
					<span className={classes?.title}>Total Balance</span>
					<strong className={classes?.value}>₹{total_budget?.amount.toLocaleString("en-IN")}</strong>
					<span className={`${classes?.change_desc}`}>{total_budget?.period_label}</span>
				</li>
				<li className={classes?.status_item}>
					<span className={classes?.title}>Total Spent</span>
					<strong className={classes?.value}>₹{total_spent?.amount.toLocaleString("en-IN")}</strong>
					<span className={`${classes?.change_desc} ${total_spent?.trend === "down" ? classes?.drop : ""}`}>
						{total_spent?.trend === "up" ? "+" : "-"}
						{total_spent?.change_percent}%{" "}
						<img
							src={
								total_spent?.trend === "up"
									? AppConstants.common?.trendUp
									: AppConstants.common?.trendDown
							}
							alt="up arrow"
						/>
					</span>
				</li>
				<li className={classes?.status_item}>
					<span className={classes?.title}>Remaining</span>
					<strong className={classes?.value}>₹{remaining?.amount.toLocaleString("en-IN")}</strong>
					<ProgressBar filled={remaining?.used_percent} />
				</li>
			</ul>
		</section>
		</>
	);
};

export default Stats;
