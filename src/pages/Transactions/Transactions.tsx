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
import { useQuery } from "@tanstack/react-query";
import { getFilteredTransactions } from "@/services/transactionService";
import { toast } from "react-toastify";
import TableSkeleton from "@/Components/common/Skeleton/TableSkeleton/TableSkeleton";

const Transactions = () => {
	const { data: categoriesData } = useCategories();
	const {
		date,
		category,
		transactionType,
		sort,
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

	const { data, error , isLoading } = useQuery({
		queryKey: ["transactions", date?.value, category?.value, transactionType, sort, pagination?.current],
		queryFn: async () => {
			const data = await getFilteredTransactions({
				period: date?.value,
				sort: sort?.value === "all" ? undefined : sort?.value,
				limit: 2,
				transaction_type: transactionType?.value === "all" ? undefined : transactionType?.value,
				categories: category?.label === "All Category" ? [] : [category?.value],
				page: pagination?.current,
			});

			if (error) {
				toast.error(data?.error);
			}

			return data;
		},
		staleTime: 1000 * 60 * 5,
	});

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
				{ isLoading ? <TableSkeleton /> : <Table transactions={data?.transactions?.data || []} />}
				<Pagination
					total={data?.transactions?.meta?.totalPages || 1}
					currentPage={data?.transactions?.meta?.currentPage || 1}
					onChangePage={(page) => setPagination({ ...pagination, current: page })}
				/>
			</main>
			{open && <CreateTransaction open={open} setOpen={setOpen} type="Add" />}
			<Footer />
		</>
	);
};

export default Transactions;
