import Filter from "@/Components/common/Filter/Filter";
import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import Pagination from "@/Components/common/Pagination/Pagination";
import useBudgetStore from "@/store/useBudgetStore";
import AppConstants from "@/utils/AppConstants";
import classes from "./budget.module.css";
import Stats from "./Stats/Stats";
import Table from "./Table/Table";
import { useState } from "react";
import CreateBudget from "./CreateBudget/CreateBudget";

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

const budgetData = [
	{
		id: "1",
		date: "15 Oct 2025",
		category: "food",
		limit: 1000,
		spent: 1200,
	},
	{
		id: "2",
		date: "15 Oct 2025",
		category: "transport",
		limit: 500,
		spent: 200,
	},
	{
		id: "3",
		date: "15 Oct 2025",
		category: "entertainment",
		limit: 200,
		spent: 100,
	},
	{
		id: "4",
		date: "15 Oct 2025",
		category: "health",
		limit: 500,
		spent: 400,
	},
];

const Budget = () => {
	const { date, category, setCategory, setDate } = useBudgetStore();
	const [open, setOpen] = useState<boolean>(false);

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
			options: AppConstants?.budgetFilters?.category?.options || [],
		},
	];
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
				<Table data={budgetData} />
				<Pagination total={3} currentPage={1} onChangePage={() => {}} />
			</main>
			{open && <CreateBudget open={open} setOpen={setOpen} type="Add" />}
			<Footer />
		</>
	);
};

export default Budget;
