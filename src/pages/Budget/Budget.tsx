import Footer from "@/Components/common/Footer/Footer";
import Header from "@/Components/common/Header/Header";
import classes from "./budget.module.css";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";

const Budget = () => {
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
			</main>
			<Footer />
		</>
	);
};

export default Budget;
