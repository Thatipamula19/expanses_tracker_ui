import AppConstants from "@/utils/AppConstants";
import classes from "./stats.module.css";
import { useQuery } from "@tanstack/react-query";
import { getStats } from "@/services/transactionService";

const Status = () => {
	const { data } = useQuery({
		queryKey: ["status"],
		queryFn: async () => {
			const data = await getStats();
			return data;
		},
		staleTime: 1000 * 60 * 60, // 1 hour
	});

	console.log(data);

	const { savings_rate, total_balance, total_expense, total_income } = data || {};
	return (
		<section className={classes?.status_sec}>
			<ul className={classes?.status_list}>
				<li className={classes?.status_item}>
					<span className={classes?.title}>Total Balance</span>
					<strong className={classes?.value}>₹{total_balance?.amount.toLocaleString("en-IN")}</strong>
					<span className={`${classes?.change_desc} ${total_balance?.trend === "down" ? classes?.drop : ""}`}>
						{total_balance?.trend === "up" ? "+" : "-"}₹
						{(total_balance?.change_amount * (total_balance?.trend === "up" ? 1 : -1)).toLocaleString("en-IN")} this month{" "}
						<img
							src={
								total_balance?.trend === "up"
									? AppConstants.common?.trendUp
									: AppConstants.common?.trendDown
							}
							alt="up arrow"
						/>
					</span>
				</li>
				<li className={classes?.status_item}>
					<span className={classes?.title}>Total Income</span>
					<strong className={classes?.value}>₹{total_income?.amount.toLocaleString("en-IN")}</strong>
					<span className={`${classes?.change_desc} ${total_income?.trend === "down" ? classes?.drop : ""}`}>
						{total_income?.trend === "up" ? "+" : "-"}₹
						{(total_income?.change_percentage * (total_income?.trend === "up" ? 1 : -1)).toLocaleString("en-IN")} from last month{" "}
						<img
							src={
								total_income?.trend === "up"
									? AppConstants.common?.trendUp
									: AppConstants.common?.trendDown
							}
							alt="up arrow"
						/>
					</span>
				</li>
				<li className={classes?.status_item}>
					<span className={classes?.title}>Total Balance</span>
					<strong className={classes?.value}>₹{total_expense?.amount.toLocaleString("en-IN")}</strong>
					<span className={`${classes?.change_desc} ${total_expense?.trend === "down" ? classes?.drop : ""}`}>
						{total_expense?.trend === "up" ? "+" : "-"}
						{total_expense?.change_percentage * (total_expense?.trend === "up" ? 1 : -1)}% this month{" "}
						<img
							src={
								total_expense?.trend === "up"
									? AppConstants.common?.trendUp
									: AppConstants.common?.trendDown
							}
							alt="up arrow"
						/>
					</span>
				</li>
				<li className={classes?.status_item}>
					<span className={classes?.title}>Total Balance</span>
					<strong className={classes?.value}>{savings_rate?.percentage}%</strong>
					<span className={`${classes?.change_desc} ${savings_rate?.trend === "down" ? classes?.drop : ""}`}>
						{savings_rate?.trend === "up" ? "+" : "-"}
						{savings_rate?.change_percentage * (savings_rate?.trend === "up" ? 1 : -1)}% this month{" "}
						<img
							src={
								savings_rate?.trend === "up"
									? AppConstants.common?.trendUp
									: AppConstants.common?.trendDown
							}
							alt="up arrow"
						/>
					</span>
				</li>
			</ul>
		</section>
	);
};

export default Status;
