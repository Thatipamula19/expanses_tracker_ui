import DynamicSelect from "../DynamicSelect/DynamicSelect";
import classes from "./filter.module.css";

const Filters = [
	{
		name: "Month",
		options: [
			{
				label: "This Month",
				value: "thisMonth",
			},
			{
				label: "Today",
				value: "today",
			},
			{
				label: "Last Month",
				value: "lastMonth",
			},
			{
				label: "This Week",
				value: "thisWeek",
			},
			{
				label: "Last Week",
				value: "lastWeek",
			},
			{
				label: "Last 3 Months",
				value: "last3Months",
			},
		],
	},
	{
		name: "Category",
		options: [
			{
				label: "All Category",
				value: "all",
			},
			{
				label: "Food & Dining",
				value: "foodDining",
			},
			{
				label: "Transportation",
				value: "transportation",
			},
			{
				label: "Expense",
				value: "expense",
			},
			{
				label: "Entertainment",
				value: "entertainment",
			},
			{
				label: "Health & Fitness",
				value: "healthFitness",
			},
			{
				label: "Education",
				value: "education",
			},
			{
				label: "Bills & Utilities",
				value: "billsUtilities",
			},
			{
				label: "Investment",
				value: "investment",
			},
			{
				label: "Freelance Work",
				value: "freelanceWork",
			},
			{
				label: "Savings Account",
				value: "savingsAccount",
			},
			{
				label: "Shopping",
				value: "shopping",
			},
			{
				label: "Salary",
				value: "salary",
			},
		],
	},
	{
		name: "Transaction Type",
		options: [
			{
				label: "All Transaction Type",
				value: "all",
			},
			{
				label: "Income",
				value: "income",
			},
			{
				label: "Expense",
				value: "expense",
			},
		],
	},
	{
		name: "Sorting",
		options: [
			{
				label: "All Sorting",
				value: "all",
			},
			{
				label: "Newest First",
				value: "newestFirst",
			},
			{
				label: "Oldest First",
				value: "oldestFirst",
			},
		],
	},
];

const Filter = () => {
	return (
		<section className={classes?.filter_sec}>
			{Filters.map((item) => (
				<DynamicSelect key={item.name} options={item.options} />
			))}
		</section>
	);
};

export default Filter;
