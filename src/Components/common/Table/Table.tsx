import AppConstants from "@/utils/AppConstants";
import classes from "./table.module.css";

const transactions = [
	{
		name: "Thumbs Up",
		date: "15 Oct 2025",
		category: "food",
		description: "Description",
		amount: "₹300.00",
		type: "expense",
	},
	{
		name: "Salary",
		date: "15 Oct 2025",
		category: "salary",
		description: "Description",
		amount: "₹1000.00",
		type: "income",
	},
	{
		name: "Rent",
		date: "15 Oct 2025",
		category: "bills",
		description: "Description",
		amount: "₹1000.00",
		type: "expense",
	},
	{
		name: "Gas",
		date: "15 Oct 2025",
		category: "bills",
		description: "Description",
		amount: "₹100.00",
		type: "expense",
	},
	{
		name: "Water",
		date: "15 Oct 2025",
		category: "bills",
		description: "Description",
		amount: "₹100.00",
		type: "expense",
	},
	{
		name: "Internet",
		date: "15 Oct 2025",
		category: "bills",
		description: "Description",
		amount: "₹100.00",
		type: "expense",
	},
	{
		name: "Netflix",
		date: "15 Oct 2025",
		category: "entertainment",
		description: "Description",
		amount: "₹100.00",
		type: "expense",
	},
	{
		name: "Other",
		date: "15 Oct 2025",
		category: "other",
		description: "Description",
		amount: "₹100.00",
		type: "expense",
	},
	{
		name: "Other",
		date: "15 Oct 2025",
		category: "other",
		description: "Description",
		amount: "₹100.00",
		type: "expense",
	},
];

const Table = () => {
	return (
		<div className={classes?.table_container}>
			<table className={classes?.table}>
				<thead className={classes?.table_header}>
					<tr>
						<th>Name</th>
						<th>Date</th>
						<th>Category</th>
						<th>Description</th>
						<th>Amount</th>
						<th>Type</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody>
					{transactions.map((item: any, index: number) => (
						<tr key={index} className={classes?.table_row}>
							<td>{item.name}</td>
							<td>{item.date}</td>
							<td>
								<div className={classes?.category}>
									<div className={classes?.category}>
										<div className={classes?.icon_container}>
											<img
												src={
													AppConstants?.category?.[
														item.category as keyof typeof AppConstants.category
													]
												}
												alt={item.category}
												className={classes?.icon}
											/>
										</div>
										<span className={classes?.category_name}>
											{
												AppConstants?.categoryMap?.[
													item.category as keyof typeof AppConstants.categoryMap
												]
											}
										</span>
									</div>
								</div>
							</td>
							<td>{item.description}</td>
							<td>{item.amount}</td>
							<td>
								<span
									className={`${classes?.badge} ${item.type === "expense" ? classes?.expense : classes?.income}`}>
									{item.type}
								</span>
							</td>
							<td className={classes?.actions}>
								<button className={classes?.edit}>
									<img src={AppConstants?.common?.pencil} alt="edit icon" className={classes?.icon} />
								</button>
								<button className={classes?.delete}>
									<img
										src={AppConstants?.common?.trash}
										alt="delete icon"
										className={classes?.icon}
									/>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
