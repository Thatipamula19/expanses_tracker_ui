import ProgressBar from "@/Components/common/ProgressBar/ProgressBar";
import type { Budget } from "@/types/budgets";
import AppConstants from "@/utils/AppConstants";
import { useState } from "react";
import CreateBudget from "../CreateBudget/CreateBudget";
import classes from "./table.module.css";
import DeleteItem from "@/Components/common/Modal/DeleteItem/DeleteItem";

const Table = ({ data }: { data: Budget[] }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [budget, setBudget] = useState<Budget>(null!);
	const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

	const onEdit = (item: Budget) => {
		setBudget(item);
		setOpen(true);
	};

	const onDelete = (item: Budget) => {
		setBudget(item);
		setDeleteOpen(true);
	};

	const handleDeleteBudget = () => {
		console.log(budget);
	};

	return (
		<div className={classes?.table_container}>
			<table className={classes?.table}>
				<thead className={classes?.table_header}>
					<tr>
						<th>Date</th>
						<th>Category</th>
						<th>Limit</th>
						<th>Spent</th>
						<th>Remaining</th>
						<th>Progress</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody>
					{data.map((item) => (
						<tr key={item.id} className={classes?.table_row}>
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
							<td>₹{item.limit}</td>
							<td>₹{item.spent}</td>
							<td>
								{item.limit - item.spent > 0
									? `₹${item.limit - item.spent}`
									: `-₹${(item.limit - item.spent) * -1}`}
							</td>
							<td>
								<ProgressBar filled={(item.spent / item.limit) * 100} />
							</td>

							<td className={classes?.actions}>
								<button className={classes?.edit} onClick={() => onEdit(item)}>
									<img src={AppConstants?.common?.pencil} alt="edit icon" className={classes?.icon} />
								</button>
								<button className={classes?.delete} onClick={() => onDelete(item)}>
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
			{open && <CreateBudget open={open} setOpen={setOpen} type="Edit" budget={budget} />}
			{deleteOpen && (
				<DeleteItem
					title="Delete Budget?"
					description="Are you sure you want to delete this budget?"
					setOpen={setDeleteOpen}
					onDelete={handleDeleteBudget}
				/>
			)}
		</div>
	);
};

export default Table;
