import Input from "@/Components/common/Modal/Input/Input";
import Modal from "@/Components/common/Modal/Modal";
import type { Budget } from "@/types/budgets";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import classes from "./styles.module.css";
import { useCategories } from "@/hooks/useCategories";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBudget, updateBudget } from "@/services/budgetService";
import ButtonLoader from "@/Components/common/Loaders/ButtonLoader/ButtonLoader";

type Props = {
	open: boolean;
	setOpen: (open: boolean) => void;
	type: "Add" | "Edit";
	budget?: Budget;
};

const CreateBudget = ({ setOpen, type, budget }: Props) => {
	const queryClient = useQueryClient();
	const { register, handleSubmit, control, reset } = useForm<Budget>();
	const { data: categoriesData = [] } = useCategories();

	useEffect(() => {
		if (budget) {
			reset({
				category_id: budget.category_id,
				limit_amount: budget.limit_amount,
				period_month: new Date(budget.period_month).toLocaleDateString("en-CA"),
				notes: budget.notes,
			});
		}
	}, [budget, reset]);

	const { mutate, isPending } = useMutation({
		mutationFn: (data: Budget) => (type === "Add" ? addBudget(data) : updateBudget(data)),

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["budgets"],
			});
			setOpen(false);
		},
	});

	const onSubmit = (data: Budget) => {
		data.period_month = new Date(data.period_month).toISOString();
		if (type === "Edit") data.id = budget?.id ? budget?.id : "";
		mutate(data);
	};

	return (
		<Modal setOpen={setOpen}>
			<form className={classes?.form} onSubmit={handleSubmit(onSubmit)}>
				<h3 className={classes?.title}>{type} Budget</h3>
				<div className={classes?.form_fields}>
					<Controller
						name="category_id"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<Input type="select" options={categoriesData} placeholder="Select Category" {...field} />
						)}
					/>
					<Input
						type="text"
						placeholder="Budget Limit (₹)"
						{...register("limit_amount", { required: true })}
						halfWidth={true}
					/>
					<Input type="date" placeholder="Select Date" {...register("period_month", { required: true })} />
					<Input type="textarea" placeholder="Notes..." {...register("notes", { required: true })} />
				</div>
				<div className={classes?.form_footer}>
					<button type="button" onClick={() => setOpen(false)} className={classes?.cancel_btn}>
						Cancel
					</button>
					<button type="submit" className={classes?.add_btn}>
						{isPending ? <ButtonLoader /> : type === "Add" ? "Add" : "Update"}
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default CreateBudget;
