import DeleteItem from "@/Components/common/Modal/DeleteItem/DeleteItem";
import ProgressBar from "@/Components/common/ProgressBar/ProgressBar";
import type { Goal } from "@/types/goals";
import AppConstants from "@/utils/AppConstants";
import { useState } from "react";
import classes from "./table.module.css";
import CreateGoal from "../CreateGoal/CreateGoal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGoal } from "@/services/goalService";

const Table = ({ data }: { data: Goal[] }) => {
	const queryClient = useQueryClient();
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

	const { mutate, isPending } = useMutation({
		mutationFn: () => deleteGoal(goal?.goal_id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["goals"] });
			setOpen(false);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const handleDeleteGoal = () => {
		mutate();
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
						<tr key={`goals_${item.goal_id}`} className={classes?.table_row}>
							<td>{item.goal_name}</td>
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
							<td>₹{item.target_amount?.toLocaleString("en-IN")}</td>
							<td>₹{item.saved_amount?.toLocaleString("en-IN")}</td>
							<td>
								<ProgressBar filled={item?.progress_percent || 0} />
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
					isPending={isPending}
				/>
			)}
		</div>
	);
};

export default Table;
