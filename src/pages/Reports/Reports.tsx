import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import classes from "./reports.module.css";

const Reports = () => {
	return (
		<>
			<Header />
			<main className={classes?.reports_main}>
				<PageTitleCTA pageTitle="Reports / Analytics" buttonName="Export" icon={false} ctaHandler={() => {}} />
			</main>
			<Footer />
		</>
	);
};

export default Reports;
