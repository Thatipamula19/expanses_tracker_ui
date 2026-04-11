import Header from "@/Components/common/Header/Header";
import classes from "./dashboard.module.css";
import Footer from "@/Components/common/Footer/Footer";
import Status from "./Stats/Status";
import Insights from "./Insights/Insights";

const Dashboard = () => {
	return (
		<>
			<Header />
			<main className={classes?.dashboard_main}>
				<Status />
				<Insights />
			</main>
			<Footer />
		</>
	);
};

export default Dashboard;
