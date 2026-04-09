import Filter from "@/Components/common/Filter/Filter";
import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import Pagination from "@/Components/common/Pagination/Pagination";
import useBudgetStore from "@/store/useBudgetStore";
import AppConstants from "@/utils/AppConstants";
import { useState } from "react";
import classes from "./budget.module.css";
import BudgetInsights from "./BudgetInsights/BudgetInsights";
import CreateBudget from "./CreateBudget/CreateBudget";
import Stats from "./Stats/Stats";
import Table from "./Table/Table";
import { getFilteredBudgets } from "@/services/budgetService";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useCategories } from "@/hooks/useCategories";

const statsData = [
	{
		id: "1",
		title: "Total Budget",
		value: 10000,
		desc: "for Oct 2025",
	},
	{
		id: "2",
		title: "Total Spent",
		value: 5000,
		spentValue: 8,
	},
	{
		id: "3",
		title: "Remaining",
		value: 5000,
		used: 72,
	},
];

const Budget = () => {
	const { date, category, setCategory, setDate, pagination, setPagination } = useBudgetStore();
	const [open, setOpen] = useState<boolean>(false);
	const { data: categoriesData, isLoading: isCategoriesLoading } = useCategories();
	const filters = [
		{
			id: 1,
			name: "Date",
			value: date,
			setValue: setDate,
			options: AppConstants?.budgetFilters?.date?.options || [],
		},
		{
			id: 2,
			name: "Category",
			value: category,
			setValue: setCategory,
			options: categoriesData || [],
		},
	];

	const { data, isLoading, error } = useQuery({
		queryKey: ["budgets", date?.value, category?.value, pagination?.current],
		queryFn: async () => {
			const data = await getFilteredBudgets({
				period: date?.value,
				limit: 2,
				category_id: category?.value === "all" ? undefined : category?.value,
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
			<main className={classes?.budget_main}>
				<PageTitleCTA
					pageTitle="Budget Planner"
					pageSubtitle="Plan and monitor your monthly limits"
					buttonName="Add Budget"
					icon={true}
					ctaHandler={() => setOpen(true)}
				/>
				<Filter filters={filters} />
				<Stats statsData={statsData} />
				<Table data={data?.data || []} />
				<Pagination
					total={data?.meta?.totalPages || 1}
					currentPage={data?.meta?.currentPage || 1}
					onChangePage={(page) => setPagination({ ...pagination, current: page })}
				/>
				<BudgetInsights />
			</main>
			{open && <CreateBudget open={open} setOpen={setOpen} type="Add" />}
			<Footer />
		</>
	);
};

export default Budget;
