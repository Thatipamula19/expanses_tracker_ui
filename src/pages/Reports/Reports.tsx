import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import classes from "./reports.module.css";
import useReportsStore from "@/store/useReportsStore";
import AppConstants from "@/utils/AppConstants";
import Filter from "@/Components/common/Filter/Filter";
import FinancialOverview from "./FinancialOverview/FinancialOverview";

const Reports = () => {
	const { category, timePeriod, setCategory, setTimePeriod } = useReportsStore();

	const filters = [
		{
			id: "1",
			name: "category",
			value: category || {},
			setValue: setCategory,
			options: AppConstants?.reportsFilters?.category?.options || [],
		},
		{
			id: "2",
			name: "timePeriod",
			value: timePeriod || {},
			setValue: setTimePeriod,
			options: AppConstants?.reportsFilters?.timePeriod?.options || [],
		},
	];

	return (
		<>
			<Header />
			<main className={classes?.reports_main}>
				<PageTitleCTA pageTitle="Reports / Analytics" buttonName="Export" icon={false} ctaHandler={() => {}} />
				<Filter filters={filters} />
				<FinancialOverview />
			</main>
			<Footer />
		</>
	);
};

export default Reports;
