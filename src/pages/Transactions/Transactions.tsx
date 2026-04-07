import Filter from "@/Components/common/Filter/Filter";
import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import Pagination from "@/Components/common/Pagination/Pagination";
import { useCategories } from "@/hooks/useCategories";
import useTransactionsStore from "@/store/useTransactionsStore";
import AppConstants from "@/utils/AppConstants";
import { useState } from "react";
import CreateTransaction from "./CreateTransaction/CreateTransaction";
import Table from "./Table/Table";
import classes from "./transaction.module.css";

const Transactions = () => {
	const { data: categoriesData, isLoading: isCategoriesLoading } = useCategories();
	const {
		date,
		category,
		transactionType,
		sort,
		// transactions,
		// setTransactions,
		pagination,
		setPagination,
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
			options: categoriesData || [],
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
				<Pagination
					total={pagination?.total}
					currentPage={pagination?.current}
					onChangePage={(page) => setPagination({ ...pagination, current: page })}
				/>
			</main>
			{open && <CreateTransaction open={open} setOpen={setOpen} type="Add" />}
			<Footer />
		</>
	);
};

export default Transactions;
