import ButtonLoader from "@/Components/common/Loaders/ButtonLoader/ButtonLoader";
import Input from "@/Components/common/Modal/Input/Input";
import Modal from "@/Components/common/Modal/Modal";
import { useCategories } from "@/hooks/useCategories";
import { createTransaction, updateTransaction } from "@/services/transactionService";
import type { Transaction } from "@/types/transactions";
import AppConstants from "@/utils/AppConstants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import classes from "./styles.module.css";

type Props = {
	open: boolean;
	setOpen: (open: boolean) => void;
	type: "Add" | "Edit";
	transaction?: Transaction;
};

const CreateTransaction = ({ setOpen, type, transaction }: Props) => {
	const queryClient = useQueryClient();

	const { data: categoriesData = [] } = useCategories();

	const { register, handleSubmit, control, watch, reset } = useForm<Transaction>();

	useEffect(() => {
		if (transaction && categoriesData.length) {
			reset({
				title: transaction.title,
				description: transaction.description,
				category_id: transaction.category_id,
				type: transaction.type,
				amount: transaction.amount,
				transaction_date: new Date(transaction.transaction_date).toISOString().split("T")[0],
			});
		}
	}, [transaction, categoriesData, reset]);

	const getIsValid = () => {
		const title = watch("title");
		const description = watch("description");
		const category = watch("category_id");
		const type = watch("type");
		const amount = watch("amount");
		const transactionDate = watch("transaction_date");
		return !!(title && description && category && type && amount && transactionDate);
	};

	const { mutate, isPending } = useMutation({
		mutationFn: (data: Transaction) => (type === "Add" ? createTransaction(data) : updateTransaction(data)),

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["transactions"],
			});
			setOpen(false);
		},
	});

	const onSubmit = (data: Transaction) => {
		data.transaction_date = new Date(data.transaction_date).toISOString();
		if (type === "Edit") data.id = transaction?.id ? transaction?.id : "";
		mutate(data);
	};

	return (
		<Modal setOpen={setOpen}>
			<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
				<h3 className={classes.title}>{type} Transaction</h3>

				<div className={classes.form_fields}>
					<Input type="text" placeholder="Transaction Title" {...register("title", { required: true })} />

					<Input
						type="textarea"
						placeholder="Describe the transaction..."
						{...register("description", { required: true })}
					/>

					<Controller
						name="category_id"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<Input type="select" options={categoriesData} placeholder="Select Category" {...field} />
						)}
					/>

					<Controller
						name="type"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<Input
								type="select"
								options={
									AppConstants.transactionFilters?.transactionType?.options.filter(
										(i) => i.value !== "all",
									) || []
								}
								placeholder="Select Transaction Type"
								{...field}
							/>
						)}
					/>

					<Input
						type="date"
						{...register("transaction_date", {
							required: true,
						})}
					/>

					<Input type="number" placeholder="Amount" halfWidth {...register("amount", { required: true })} />
				</div>

				<div className={classes.form_footer}>
					<button type="button" onClick={() => setOpen(false)} className={classes.cancel_btn}>
						Cancel
					</button>

					<button type="submit" disabled={!getIsValid()} className={classes.add_btn}>
						{isPending ? <ButtonLoader /> : type === "Add" ? "Add" : "Update"}
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default CreateTransaction;
