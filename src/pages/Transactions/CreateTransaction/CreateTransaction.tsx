import Input from "@/Components/common/Modal/Input/Input";
import Modal from "@/Components/common/Modal/Modal";
import classes from "./styles.module.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import type { Transaction } from "@/types/transactions";
import { useCategories } from "@/hooks/useCategories";
import AppConstants from "@/utils/AppConstants";
import { createTransaction } from "@/services/transactionService";

const CreateTransaction = ({
	// open,
	setOpen,
	type,
	transaction,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
	type: "Add" | "Edit";
	transaction?: Transaction;
}) => {
	const {
		register,
		handleSubmit,
		// formState: { isValid, errors },
		// setValue,
		reset,
	} = useForm<Transaction>();
	const { data: categoriesData, isLoading: isCategoriesLoading } = useCategories();

	useEffect(() => {
		if (transaction) {
			reset({
				title: transaction.title,
				description: transaction.description,
				category: categoriesData?.find((item) => item.value === transaction.category)?.value,
				type: transaction.type,
				amount: transaction.amount,
				date: new Date(transaction.date).toLocaleDateString("en-CA"),
			});
		}
	}, [transaction, reset, categoriesData]);

	const handleTransTransaction = async (data: Transaction) => {
		console.log(data);
		try {
			const res = await createTransaction(data);
			console.log(res);
			
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Modal setOpen={setOpen}>
			<form className={classes?.form} onSubmit={handleSubmit(handleTransTransaction)}>
				<h3 className={classes?.title}>{type} Transaction</h3>
				<div className={classes?.form_fields}>
					<Input type="text" placeholder="Transaction Title" {...register("title", { required: true })} />
					<Input
						type="textarea"
						placeholder="Describe the transaction..."
						{...register("description", { required: true })}
					/>
					<Input
						type="select"
						options={categoriesData}
						placeholder="Select Category"
						{...register("category", { required: true })}
					/>
					<Input
						type="select"
						options={AppConstants.transactionFilters?.transactionType?.options || []}
						placeholder="Select Transaction Type"
						{...register("type", { required: true })}
					/>
					<Input type="date" placeholder="Select Date" {...register("date", { required: true })} />
					<Input
						type="text"
						placeholder="Amount"
						halfWidth={true}
						{...register("amount", { required: true })}
					/>
				</div>
				<div className={classes?.form_footer}>
					<button type="button" onClick={() => setOpen(false)} className={classes?.cancel_btn}>
						Cancel
					</button>
					<button type="submit" className={classes?.add_btn}>
						Add
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default CreateTransaction;
