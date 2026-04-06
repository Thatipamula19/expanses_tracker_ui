import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import classes from "./goals.module.css";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import useGoalsStore from "@/store/useGoalsStore";
import Filter from "@/Components/common/Filter/Filter";
import AppConstants from "@/utils/AppConstants";
import Table from "./Table/Table";
import Pagination from "@/Components/common/Pagination/Pagination";
import ProgressOverview from "./ProgressOverview/ProgressOverview";
import CreateGoal from "./CreateGoal/CreateGoal";
import { useState } from "react";

const goalsData = [
	{
		id: "1",
		title: "Save for a down payment",
		start_date: "15 Oct 2025",
		end_date: "31 Oct 2025",
		category: "bills",
		target: 300,
		saved: 100,
		status: "Ongoing",
	},
	{
		id: "2",
		title: "Buy a New Laptop",
		start_date: "15 Oct 2025",
		end_date: "31 Oct 2025",
		category: "education",
		target: 49999,
		saved: 15999,
		status: "Ongoing",
	},
	{
		id: "3",
		title: "Save for a New Car",
		start_date: "15 Oct 2025",
		end_date: "31 Oct 2025",
		category: "transport",
		target: 100000,
		saved: 50000,
		status: "completed",
	},
	{
		id: "4",
		title: "Buy a New Phone",
		start_date: "15 Oct 2025",
		end_date: "31 Oct 2025",
		category: "other",
		target: 19999,
		saved: 15999,
		status: "Ongoing",
	},
];

const Goals = () => {
	const { status, timePeriod, pagination, setStatus, setTimePeriod, setPagination } = useGoalsStore();
	const [open, setOpen] = useState<boolean>(false);

	const filters = [
		{
			id: "1",
			name: "Status",
			value: status || {},
			setValue: setStatus,
			options: AppConstants?.goalsFilters?.status?.options || [],
		},
		{
			id: "2",
			name: "Time Period",
			value: timePeriod || {},
			setValue: setTimePeriod,
			options: AppConstants?.goalsFilters?.timePeriod?.options || [],
		},
	];

	return (
		<>
			<Header />
			<main className={classes.goals_sec}>
				<PageTitleCTA
					pageTitle="Goals"
					pageSubtitle="Set, track, and achieve your financial targets"
					buttonName="Add Goal"
					icon={true}
					ctaHandler={() => {
						setOpen(true);
					}}
				/>
				<Filter filters={filters} />
				<Table data={goalsData} />
				<Pagination
					total={pagination.total}
					currentPage={pagination.current}
					onChangePage={(page) => setPagination({ ...pagination, current: page })}
				/>
				<ProgressOverview />
			</main>
			{open && <CreateGoal open={open} setOpen={setOpen} type="Add" />}
			<Footer />
		</>
	);
};

export default Goals;
