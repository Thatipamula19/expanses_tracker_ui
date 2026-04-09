import Header from "@/Components/common/Header/Header";
import classes from "./dashboard.module.css";
import Footer from "@/Components/common/Footer/Footer";
import Status from "./Stats/Status";

const Dashboard = () => {
	return (
		<>
			<Header />
			<main className={classes?.dashboard_main}>
				<Status />
			</main>
			<Footer />
		</>
	);
};

export default Dashboard;
