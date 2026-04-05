import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import classes from "./goals.module.css";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import useGoalsStore from "@/store/useGoalsStore";
import Filter from "@/Components/common/Filter/Filter";
import AppConstants from "@/utils/AppConstants";

const Goals = () => {
	const { status, timePeriod, setStatus, setTimePeriod } = useGoalsStore();

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
					ctaHandler={() => {}}
				/>
				<Filter filters={filters} />
			</main>
			<Footer />
		</>
	);
};

export default Goals;
