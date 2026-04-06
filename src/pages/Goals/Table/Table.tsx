import DeleteItem from "@/Components/common/Modal/DeleteItem/DeleteItem";
import ProgressBar from "@/Components/common/ProgressBar/ProgressBar";
import type { Goal } from "@/types/goals";
import AppConstants from "@/utils/AppConstants";
import { useState } from "react";
import classes from "./table.module.css";
import CreateGoal from "../CreateGoal/CreateGoal";

const Table = ({ data }: { data: Goal[] }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [goal, setGoal] = useState<Goal>(null!);
	const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

	const onEdit = (item: Goal) => {
		setGoal(item);
		setOpen(true);
	};

	const onDelete = (item: Goal) => {
		setGoal(item);
		setDeleteOpen(true);
	};

	const handleDeleteGoal = () => {
		console.log(goal);
	};

	return (
		<div className={classes?.table_container}>
			<table className={classes?.table}>
				<thead className={classes?.table_header}>
					<tr>
						<th>Title</th>
						<th>Category</th>
						<th>Target</th>
						<th>Saved</th>
						<th>Progress</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody>
					{data.map((item) => (
						<tr key={item.id} className={classes?.table_row}>
							<td>{item.title}</td>
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
							<td>₹{item.target}</td>
							<td>₹{item.saved}</td>
							<td>
								<ProgressBar filled={(item.saved / item.target) * 100} />
							</td>
							<td>
								<span
									className={`${classes?.badge} ${item.status === "completed" ? classes?.completed : classes?.ongoing}`}>
									{item.status}
								</span>
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
			{open && <CreateGoal open={open} setOpen={setOpen} type="Edit" goal={goal} />}
			{deleteOpen && (
				<DeleteItem
					title="Delete Goal?"
					description="Are you sure you want to delete this goal?"
					setOpen={setDeleteOpen}
					onDelete={handleDeleteGoal}
				/>
			)}
		</div>
	);
};

export default Table;
