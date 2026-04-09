import DeleteItem from "@/Components/common/Modal/DeleteItem/DeleteItem";
import { deleteTransaction } from "@/services/transactionService";
import type { Transaction } from "@/types/transactions";
import AppConstants from "@/utils/AppConstants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import CreateTransaction from "../CreateTransaction/CreateTransaction";
import classes from "./table.module.css";

const Table = ({ transactions }: { transactions: Transaction[] }) => {
	const queryClient = useQueryClient();
	const [open, setOpen] = useState<boolean>(false);
	const [transaction, setTransaction] = useState<Transaction>(null!);
	const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

	const onEdit = (item: Transaction) => {
		setTransaction(item);
		setOpen(true);
	};

	const onDelete = (item: Transaction) => {
		setTransaction(item);
		setDeleteOpen(true);
	};

	const { mutate, isPending } = useMutation({
		mutationFn: () => deleteTransaction(transaction?.id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["transactions"] });
			setOpen(false);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const handleDeleteTransaction = () => {
		mutate();
	};

	return (
		<div className={classes?.table_container}>
			<table className={classes?.table}>
				<thead className={classes?.table_header}>
					<tr>
						<th>Title</th>
						<th>Date</th>
						<th>Category</th>
						<th>Description</th>
						<th>Amount</th>
						<th>Type</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody>
					{transactions.map((item) => (
						<tr key={item.title} className={classes?.table_row}>
							<td>{item.title}</td>
							<td>{item.transaction_date}</td>
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
							<td>{item.description}</td>
							<td>₹{Number(item.amount).toLocaleString("en-IN")}</td>
							<td>
								<span
									className={`${classes?.badge} ${item.type === "expense" ? classes?.expense : classes?.income}`}>
									{item.type}
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
			{open && <CreateTransaction open={open} setOpen={setOpen} type="Edit" transaction={transaction} />}
			{deleteOpen && (
				<DeleteItem
					title="Delete Transaction?"
					description="Are you sure you want to delete this transaction?"
					setOpen={setDeleteOpen}
					onDelete={handleDeleteTransaction}
					isPending={isPending}
				/>
			)}
		</div>
	);
};

export default Table;
