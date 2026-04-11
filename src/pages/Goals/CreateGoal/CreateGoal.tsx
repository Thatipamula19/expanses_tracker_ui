import Input from "@/Components/common/Modal/Input/Input";
import Modal from "@/Components/common/Modal/Modal";
import type { Goal } from "@/types/goals";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import classes from "./createGoal.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCategories } from "@/hooks/useCategories";
import { addGoal, updateGoal } from "@/services/goalService";
import AppConstants from "@/utils/AppConstants";
import { toast } from "react-toastify";


type Props = {
	open: boolean;
	setOpen: (open: boolean) => void;
	type: "Add" | "Edit";
	goal?: Goal;
};
const CreateGoal = ({
	// open,
	setOpen,
	type,
	goal,
}: Props) => {
	const queryClient = useQueryClient();
	const { register, handleSubmit, control, watch, reset } = useForm<Goal>();
	const { data: categoriesData = [] } = useCategories();

	useEffect(() => {
		if (goal) {
			reset({
				goal_name: goal.goal_name,
				category_id: goal.category_id,
				target_amount: goal.target_amount,
				start_date: new Date(goal.start_date).toLocaleDateString("en-CA"),
				end_date: new Date(goal.end_date).toLocaleDateString("en-CA"),
				status: goal.status,
			});
		}
	}, [goal, reset]);

	const { mutate, isPending } = useMutation({
		mutationFn: (data: Goal) => (type === "Add" ? addGoal(data) : updateGoal(data)),

		onSuccess: (data) => {
			toast.success(data?.message || (type === "Add" ? "Goal added successfully" : "Goal updated successfully"));
			queryClient.invalidateQueries({
				queryKey: ["goals"],
			});
			setOpen(false);
		},
	});

	const onSubmit = (data: Goal) => {
		data.start_date = new Date(data.start_date).toISOString();
		data.end_date = new Date(data.end_date).toISOString();
		if (type === "Edit") data.goal_id = goal?.goal_id ? goal?.goal_id : "";
		mutate(data);
	};

	return (
		<Modal setOpen={setOpen}>
			<form className={classes?.form} onSubmit={handleSubmit(onSubmit)}>
				<h3 className={classes?.title}>{type} Goal</h3>
				<div className={classes?.form_fields}>
					<Input type="text" placeholder="Goal Name" {...register("goal_name", { required: true })} />
					<Input type="number" placeholder="Target Amount (₹)" {...register("target_amount", { required: true })} />
					<Input type="date" placeholder="start Date" {...register("start_date", { required: true })} />
					<Input type="date" placeholder="end Date" {...register("end_date", { required: true })} />
					<Controller
						name="category_id"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<Input type="select" options={categoriesData} placeholder="Select Category" {...field} />
						)}
					/>
					<Controller
						name="status"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<Input type="select" options={AppConstants?.goalsFilters?.form_status?.options || []} placeholder="Select Status" {...field} />
						)}
					/>
				</div>
				<div className={classes?.form_footer}>
					<button type="button" onClick={() => setOpen(false)} className={classes?.cancel_btn}>
						Cancel
					</button>
					<button type="submit" className={classes?.add_btn}>
						{type === "Add" ? "Add" : "Update"}
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default CreateGoal;
