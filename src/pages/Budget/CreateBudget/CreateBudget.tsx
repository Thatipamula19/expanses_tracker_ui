import Input from "@/Components/common/Modal/Input/Input";
import Modal from "@/Components/common/Modal/Modal";
import type { Budget } from "@/types/budgets";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "./styles.module.css";

const CreateBudget = ({
	// open,
	setOpen,
	type,
	budget,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
	type: "Add" | "Edit";
	budget?: Budget;
}) => {
	const {
		register,
		handleSubmit,
		// formState: { isValid, errors },
		// setValue,
		reset,
	} = useForm<Budget>();

	useEffect(() => {
		if (budget) {
			reset({
				category: budget.category,
				limit: budget.limit,
				date: new Date(budget.date).toLocaleDateString("en-CA"),
				note: budget.note,
			});
		}
	}, [budget, reset]);

	const handleTransTransaction = (data: Budget) => console.log(data);

	return (
		<Modal setOpen={setOpen}>
			<form className={classes?.form} onSubmit={handleSubmit(handleTransTransaction)}>
				<h3 className={classes?.title}>{type} Budget</h3>
				<div className={classes?.form_fields}>
					<Input type="select" placeholder="Select Category" {...register("category", { required: true })} />
					<Input
						type="text"
						placeholder="Budget Limit (₹)"
						{...register("limit", { required: true })}
						halfWidth={true}
					/>
					<Input type="date" placeholder="Select Date" {...register("date", { required: true })} />
					<Input type="textarea" placeholder="Notes..." {...register("note", { required: true })} />
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

export default CreateBudget;
