import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import classes from "./reports.module.css";
import useReportsStore from "@/store/useReportsStore";
import AppConstants from "@/utils/AppConstants";
import Filter from "@/Components/common/Filter/Filter";
import FinancialOverview from "./FinancialOverview/FinancialOverview";
import { getReports } from "@/services/reportService";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { useCategories } from "@/hooks/useCategories";

const Reports = () => {
	const { category, timePeriod, setCategory, setTimePeriod } = useReportsStore();
	const { data: categoriesData } = useCategories();
	const filters = [
		{
			id: "1",
			name: "category",
			value: category || {},
			setValue: setCategory,
			options: categoriesData || [],
		},
		{
			id: "2",
			name: "timePeriod",
			value: timePeriod || {},
			setValue: setTimePeriod,
			options: AppConstants?.reportsFilters?.timePeriod?.options || [],
		},
	];

	const { data, isLoading, error } = useQuery({
		queryKey: ["reports", timePeriod?.value, category?.value],
		queryFn: async () => {
			const data = await getReports({
				time_period: timePeriod?.value,
				category_id: category?.value === "all" ? undefined : category?.value,
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
			<main className={classes?.reports_main}>
				<PageTitleCTA pageTitle="Reports / Analytics" buttonName="Export" icon={false} ctaHandler={() => { }} />
				<Filter filters={filters} />
				<FinancialOverview reportData={data} isLoading={isLoading} error={error} />
			</main>
			<Footer />
		</>
	);
};

export default Reports;
