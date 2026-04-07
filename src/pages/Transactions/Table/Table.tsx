import DeleteItem from "@/Components/common/Modal/DeleteItem/DeleteItem";
import type { Transaction } from "@/types/transactions";
import AppConstants from "@/utils/AppConstants";
import { useState } from "react";
import CreateTransaction from "../CreateTransaction/CreateTransaction";
import classes from "./table.module.css";

const transactions = [
	{
		id: "1",
		title: "Thumbs Up",
		date: "15 Oct 2025",
		category: "4df9ec58-79df-4496-a4af-6f060a1f3fc9",
		description: "Description",
		amount: 300.0,
		type: "expense",
	},
	{
		id: "2",
		title: "Salary",
		date: "18 Oct 2025",
		category: "salary",
		description: "Description",
		amount: 1000.0,
		type: "income",
	},
	{
		id: "3",
		title: "Rent",
		date: "15 Oct 2025",
		category: "bills",
		description: "Description",
		amount: 1000.0,
		type: "expense",
	},
	{
		id: "4",
		title: "Gas",
		date: "15 Oct 2025",
		category: "bills",
		description: "Description",
		amount: 100.0,
		type: "expense",
	},
	{
		id: "5",
		title: "Electricity",
		date: "15 Oct 2025",
		category: "bills",
		description: "Description",
		amount: 100.0,
		type: "expense",
	},
	{
		id: "6",
		title: "Internet",
		date: "15 Oct 2025",
		category: "bills",
		description: "Description",
		amount: 100.0,
		type: "expense",
	},
	{
		id: "7",
		title: "Netflix",
		date: "15 Oct 2025",
		category: "entertainment",
		description: "Description",
		amount: 100.0,
		type: "expense",
	},
	{
		id: "8",
		title: "books",
		date: "15 Oct 2025",
		category: "education",
		description: "Description",
		amount: 100.0,
		type: "expense",
	},
	{
		id: "9",
		title: "Other",
		date: "15 Oct 2025",
		category: "other",
		description: "Description",
		amount: 100.0,
		type: "expense",
	},
];

const Table = () => {
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

	const handleDeleteTransaction = () => {
		console.log(transaction);
	};

	return (
		<div className={classes?.table_container}>
			<table className={classes?.table}>
				<thead className={classes?.table_header}>
					<tr>
						<th>Name</th>
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
							<td>{item.date}</td>
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
							<td>{item.description}</td>
							<td>₹{item.amount}</td>
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
				/>
			)}
		</div>
	);
};

export default Table;
