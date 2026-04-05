import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import classes from "./budget.module.css";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import Stats from "./Stats/Stats";
import useBudgetStore from "@/store/useBudgetStore";
import AppConstants from "@/utils/AppConstants";
import Filter from "@/Components/common/Filter/Filter";
import Pagination from "@/Components/common/Pagination/Pagination";

const statsData = [
	{
		title: "Total Budget",
		value: 10000,
		desc: "for Oct 2025",
	},
	{
		title: "Total Spent",
		value: 5000,
		spentValue: 8,
	},
	{
		title: "Remaining",
		value: 5000,
		used: 72,
	},
];

const Budget = () => {
	const { date, category, setCategory, setDate } = useBudgetStore();

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
					ctaHandler={() => {}}
				/>
				<Filter filters={filters} />
				<Stats statsData={statsData} />
				<Pagination total={3} currentPage={1} onChangePage={() => {}} />
			</main>
			<Footer />
		</>
	);
};

export default Budget;
