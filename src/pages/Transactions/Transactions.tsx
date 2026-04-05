import Filter from "@/Components/common/Filter/Filter";
import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import Pagination from "@/Components/common/Pagination/Pagination";
import useTransactionsStore from "@/store/useTransactionsStore";
import AppConstants from "@/utils/AppConstants";
import { useState } from "react";
import CreateTransaction from "./CreateTransaction/CreateTransaction";
import Table from "./Table/Table";
import classes from "./transaction.module.css";

// const transactionsData = [
// 	{
// 		id: "1",
// 		title: "Thumbs Up",
// 		date: "15 Oct 2025",
// 		category: "food",
// 		description: "Description",
// 		amount: 300.0,
// 		type: "expense",
// 	},
// 	{
// 		id: "2",
// 		title: "Salary",
// 		date: "18 Oct 2025",
// 		category: "salary",
// 		description: "Description",
// 		amount: 1000.0,
// 		type: "income",
// 	},
// 	{
// 		id: "3",
// 		title: "Rent",
// 		date: "15 Oct 2025",
// 		category: "bills",
// 		description: "Description",
// 		amount: 1000.0,
// 		type: "expense",
// 	},
// 	{
// 		id: "4",
// 		title: "Gas",
// 		date: "15 Oct 2025",
// 		category: "bills",
// 		description: "Description",
// 		amount: 100.0,
// 		type: "expense",
// 	},
// 	{
// 		id: "5",
// 		title: "Electricity",
// 		date: "15 Oct 2025",
// 		category: "bills",
// 		description: "Description",
// 		amount: 100.0,
// 		type: "expense",
// 	},
// 	{
// 		id: "6",
// 		title: "Internet",
// 		date: "15 Oct 2025",
// 		category: "bills",
// 		description: "Description",
// 		amount: 100.0,
// 		type: "expense",
// 	},
// 	{
// 		id: "7",
// 		title: "Netflix",
// 		date: "15 Oct 2025",
// 		category: "entertainment",
// 		description: "Description",
// 		amount: 100.0,
// 		type: "expense",
// 	},
// 	{
// 		id: "8",
// 		title: "books",
// 		date: "15 Oct 2025",
// 		category: "education",
// 		description: "Description",
// 		amount: 100.0,
// 		type: "expense",
// 	},
// 	{
// 		id: "9",
// 		title: "Other",
// 		date: "15 Oct 2025",
// 		category: "other",
// 		description: "Description",
// 		amount: 100.0,
// 		type: "expense",
// 	},
// ];

const Transactions = () => {
	const {
		date,
		category,
		transactionType,
		sort,
		// transactions,
		// setTransactions,
		setDate,
		setCategory,
		setTransactionType,
		setSort,
	} = useTransactionsStore();

	const filters = [
		{
			id: 1,
			name: "Date",
			value: date,
			setValue: setDate,
			options: AppConstants?.transactionFilters?.date?.options || [],
		},
		{
			id: 2,
			name: "Category",
			value: category,
			setValue: setCategory,
			options: AppConstants?.transactionFilters?.category?.options || [],
		},
		{
			id: 3,
			name: "Transaction Type",
			value: transactionType,
			setValue: setTransactionType,
			options: AppConstants?.transactionFilters?.transactionType?.options || [],
		},
		{
			id: 4,
			name: "Sort",
			value: sort,
			setValue: setSort,
			options: AppConstants?.transactionFilters?.sort?.options || [],
		},
	];

	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<Header />
			<main className={classes?.transactions_main}>
				<PageTitleCTA
					pageTitle="Transactions"
					buttonName="Add Transaction"
					icon={true}
					ctaHandler={() => setOpen(true)}
				/>
				<Filter filters={filters} />
				<Table />
				<Pagination total={4} currentPage={1} onChangePage={() => {}} />
			</main>
			{open && <CreateTransaction open={open} setOpen={setOpen} type="Add" />}
			<Footer />
		</>
	);
};

export default Transactions;
