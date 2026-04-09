import AppConstants from "@/utils/AppConstants";
import classes from "./stats.module.css";
import { useQuery } from "@tanstack/react-query";
import { getStats } from "@/services/transactionService";
// const data = [
// 	{
// 		id: 1,
// 		title: "Total Balance",
// 		amount: 24011,
// 		change_amount: 24011,
// 		change_percentage: 100,
// 		trend: "up",
// 	},
// 	{
// 		id: 2,
// 		title: "Total Income",
// 		amount: 54000,
// 		change_percentage: 100,
// 		trend: "up",
// 	},
// 	{
// 		id: 3,
// 		title: "Total Expense",
// 		amount: 29989,
// 		change_percentage: 100,
// 		trend: "down",
// 	},
// 	{
// 		id: 4,
// 		title: "Savings Rate",
// 		percentage: 44,
// 		change_percentage: 100,
// 		trend: "up",
// 	},
// ];

const Status = () => {
	const {
		data = [],
		isLoading,
		error,
	} = useQuery({
		queryKey: ["status"],
		queryFn: async () => {
			const data = await getStats();
			return data?.statistics;
		},
	});
	return (
		<section className={classes?.status_sec}>
			<ul className={classes?.status_list}>
				{data.map((item, index) => (
					<li key={item.id} className={classes?.status_item}>
						<span className={classes?.title}>{item.title}</span>
						<strong className={classes?.value}>
							{item?.amount ? `₹${item.amount}` : `${item.percentage}%`}
						</strong>
						{/* <span>{item.trend === "up" ? "▲" : "▼"} {item.amount}</span> */}
						<span className={classes?.trend}>
							{`${item.trend === "up" ? "+" : "-"} ${index == 0 ? "₹" : ""} ${item.change_amount ? `${Number(item.change_amount).toLocaleString("en-IN")}` : `${item.change_percentage * -1}%`} ${index == 1 || index == 2 ? "from last month" : index == 0 ? "this month" : "improvement"}`}{" "}
							<img
								src={item.trend === "up" ? AppConstants.common.trendUp : AppConstants.common.trendDown}
								alt="trend arrow"
							/>
						</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Status;
