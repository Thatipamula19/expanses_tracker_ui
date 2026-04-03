import Header from "@/Components/common/Header/Header";
import PageTitleCTA from "@/Components/common/PageTitleCTA/PageTitleCTA";
import classes from "./transaction.module.css";
import Table from "@/Components/common/Table/Table";
import Footer from "@/Components/common/Footer/Footer";
import Filter from "@/Components/common/Filter/Filter";
import { useState } from "react";
import CreateTransaction from "./CreateTransaction/CreateTransaction";

const Transactions = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<Header />
			<main className={classes?.transactions_main}>
				<PageTitleCTA
					pageTitle="Transactions"
					buttonName="Add Transaction"
					icon={true}
					ctaHandler={() => setOpen(true)}
				/>
				<Filter />
				<Table />
			</main>
			{open && <CreateTransaction open={open} setOpen={setOpen} />}
			<Footer />
		</>
	);
};

export default Transactions;
