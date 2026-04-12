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
import { useQuery } from "@tanstack/react-query";
import { getFilteredGoals } from "@/services/goalService";
import { toast } from "react-toastify";


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

	const { data, error } = useQuery({
		queryKey: ["goals", status, timePeriod, pagination?.current],
		queryFn: async () => {
			const data = await getFilteredGoals({
				status: status?.value === "all" ? undefined : status?.value,
				time_period: timePeriod?.value,
				page: pagination?.current,
				limit: 2,
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
				<Table data={data?.goals || []} />
				<Pagination
					total={data?.meta?.totalPages || 1}
					currentPage={data?.meta?.currentPage || 1}
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
