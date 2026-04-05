import Filter from "@/Components/common/Filter/Filter";
import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import Pagination from "@/Components/common/Pagination/Pagination";
import Table from "@/Components/common/Table/Table";
import { useState } from "react";
import CreateTransaction from "./CreateTransaction/CreateTransaction";
import classes from "./transaction.module.css";
import useTransactionsStore from "@/store/useTransactionsStore";
import AppConstants from "@/utils/AppConstants";

const Transactions = () => {
	const {
		date,
		category,
		transactionType,
		sort,
		transactions,
		setTransactions,
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
