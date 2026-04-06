import Input from "@/Components/common/Modal/Input/Input";
import Modal from "@/Components/common/Modal/Modal";
import type { Goal } from "@/types/goals";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "./createGoal.module.css";

const CreateGoal = ({
	// open,
	setOpen,
	type,
	goal,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
	type: "Add" | "Edit";
	goal?: Goal;
}) => {
	const {
		register,
		handleSubmit,
		// formState: { isValid, errors },
		// setValue,
		reset,
	} = useForm<Goal>();

	useEffect(() => {
		if (goal) {
			reset({
				title: goal.title,
				category: goal.category,
				target: goal.target,
				start_date: new Date(goal.start_date).toLocaleDateString("en-CA"),
				end_date: new Date(goal.end_date).toLocaleDateString("en-CA"),
				status: goal.status,
			});
		}
	}, [goal, reset]);

	const handleTransTransaction = (data: Goal) => console.log(data);

	return (
		<Modal setOpen={setOpen}>
			<form className={classes?.form} onSubmit={handleSubmit(handleTransTransaction)}>
				<h3 className={classes?.title}>{type} Goal</h3>
				<div className={classes?.form_fields}>
					<Input type="text" placeholder="Goal Name" {...register("title", { required: true })} />
					<Input type="text" placeholder="Target Amount (₹)" {...register("target", { required: true })} />
					<Input type="date" placeholder="start Date" {...register("start_date", { required: true })} />
					<Input type="date" placeholder="end Date" {...register("end_date", { required: true })} />
					<Input type="select" placeholder="Select Category" {...register("category", { required: true })} />
					<Input type="select" placeholder="Select Status" {...register("status", { required: true })} />
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
