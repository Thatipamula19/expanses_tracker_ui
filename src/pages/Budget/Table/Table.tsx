import ProgressBar from "@/Components/common/ProgressBar/ProgressBar";
import type { Budget } from "@/types/budgets";
import AppConstants from "@/utils/AppConstants";
import { useState } from "react";
import CreateBudget from "../CreateBudget/CreateBudget";
import classes from "./table.module.css";
import DeleteItem from "@/Components/common/Modal/DeleteItem/DeleteItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBudget } from "@/services/budgetService";

const Table = ({ data }: { data: Budget[] }) => {
	const queryClient = useQueryClient();
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


	const { mutate, isPending } = useMutation({
		mutationFn: () => deleteBudget(budget?.id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["budgets"] });
			setOpen(false);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const handleDeleteBudget = () => {
		mutate();
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
							<td>{item.period_month}</td>
							<td>
								<div className={classes?.category}>
									<div className={classes?.category}>
										<div className={classes?.icon_container}>
											<img
												src={
													AppConstants?.category?.[
													item.category_icon as keyof typeof AppConstants.category
													]
												}
												alt={item.category_icon}
												className={classes?.icon}
											/>
										</div>
										<span className={classes?.category_name}>{item.category_name}</span>
									</div>
								</div>
							</td>
							<td>₹{item.limit_amount}</td>
							<td>₹{item.spent_amount}</td>
							<td>
								{item.limit_amount - item.spent_amount > 0
									? `₹${item.limit_amount - item.spent_amount}`
									: `-₹${(item.limit_amount - item.spent_amount) * -1}`}
							</td>
							<td>
								<ProgressBar filled={item.used_percent} />
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
					isPending={isPending}
				/>
			)}
		</div>
	);
};

export default Table;
