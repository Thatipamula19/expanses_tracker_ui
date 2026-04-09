// Auth Icons
import emailIcon from "@/assets/authIcons/email.svg";
import lockIcon from "@/assets/authIcons/lock.svg";
import eyeOpenIcon from "@/assets/authIcons/eye_open.svg";
import eyeCloseIcon from "@/assets/authIcons/eye_close.svg";
import notificationIcon from "@/assets/header/notification.svg";
import notificationHoverHoverIcon from "@/assets/header/notification_hover.svg";
import userIcon from "@/assets/header/user.svg";
import userHoverIcon from "@/assets/header/user_hover.svg";

// Logos
import logoLight from "@/assets/logos/logo_light.svg";
import logoPrimary from "@/assets/logos/logo_primary.svg";
import logoSecondary from "@/assets/logos/logo_secondary.svg";

//Common Icons
import plusIcon from "@/assets/common/plus.svg";
import pencilIcon from "@/assets/common/pencil.svg";
import trashIcon from "@/assets/common/trash.svg";
import arrowDownIcon from "@/assets/common/arrow_down.svg";
import trendUpIcon from "@/assets/common/trend_up.svg";
import trendDownIcon from "@/assets/common/trend_down.svg";

// Category Icons
import salaryIcon from "@/assets/category/salary.svg";
import foodIcon from "@/assets/category/food.svg";
import transportIcon from "@/assets/category/transport.svg";
import otherIcon from "@/assets/category/others.svg";
import entertainmentIcon from "@/assets/category/entertainment.svg";
import healthIcon from "@/assets/category/health.svg";
import educationIcon from "@/assets/category/education.svg";
import billsIcon from "@/assets/category/bills.svg";
import investmentsIcon from "@/assets/category/investment.svg";
import freelanceIcon from "@/assets/category/freelance.svg";
import savingsIcon from "@/assets/category/savings.svg";
import shoppingIcon from "@/assets/category/shopping.svg";

const AppConstants = Object.freeze({
	icons: {
		email: emailIcon,
		lock: lockIcon,
		eyeOpen: eyeOpenIcon,
		eyeClose: eyeCloseIcon,
		notification: notificationIcon,
		notificationHover: notificationHoverHoverIcon,
		user: userIcon,
		userHover: userHoverIcon,
	},
	logos: {
		light: logoLight,
		primary: logoPrimary,
		secondary: logoSecondary,
	},
	common: {
		plus: plusIcon,
		pencil: pencilIcon,
		trash: trashIcon,
		arrowDown: arrowDownIcon,
		trendUp: trendUpIcon,
		trendDown: trendDownIcon,
	},
	category: {
		salary: salaryIcon,
		food: foodIcon,
		transport: transportIcon,
		other: otherIcon,
		entertainment: entertainmentIcon,
		health: healthIcon,
		education: educationIcon,
		bills: billsIcon,
		investment: investmentsIcon,
		freelance: freelanceIcon,
		savings: savingsIcon,
		shopping: shoppingIcon,
	},

	categoryMap: {
		food: "Food & Dining",
		transport: "Transportation",
		other: "Other",
		entertainment: "Entertainment",
		health: "Health & Fitness",
		education: "Education",
		bills: "Bills & Utilities",
		investment: "Investment",
		freelance: "Freelance Work",
		savings: "Savings Account",
		shopping: "Shopping",
		salary: "Salary",
	},

	transactionFilters: {
		date: {
			name: "Date",
			options: [
				{
					label: "This Month",
					value: "this_month",
				},
				{
					label: "Today",
					value: "today",
				},
				{
					label: "This Week",
					value: "this_week",
				},
				{
					label: "Last Month",
					value: "last_month",
				},

				// {
				// 	label: "Last Week",
				// 	value: "last_week",
				// },
				{
					label: "Last 3 Months",
					value: "last_3_months",
				},
			],
		},
		category: {
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
		transactionType: {
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
		sort: {
			name: "Sorting",
			options: [
				{
					label: "Newest First",
					value: "desc",
				},
				{
					label: "Oldest First",
					value: "asc",
				},
			],
		},
	},

	budgetFilters: {
		date: {
			name: "Date",
			options: [
				{
					label: "Jan 2026",
					value: "2026-01",
				},
				{
					label: "Feb 2026",
					value: "2026-02",
				},
				{
					label: "Mar 2026",
					value: "2026-03",
				},
				{
					label: "Apr 2026",
					value: "2026-04",
				},
				{
					label: "May 2026",
					value: "2026-05",
				},
				{
					label: "Jun 2026",
					value: "2026-06",
				},
				{
					label: "Jul 2026",
					value: "2026-07",
				},
				{
					label: "Aug 2026",
					value: "aug2026",
				},
				{
					label: "Sep 2026",
					value: "2026-09",
				},
				{
					label: "Oct 2026",
					value: "2026-10",
				},
				{
					label: "Nov 2026",
					value: "2026-11",
				},
				{
					label: "Dec 2026",
					value: "2026-12",
				},
			],
		},
		category: {
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
	},
	goalsFilters: {
		status: {
			name: "Status",
			options: [
				{
					label: "All",
					value: "all",
				},
				{
					label: "Ongoing",
					value: "ongoing",
				},
				{
					label: "Completed",
					value: "completed",
				},
			],
		},
		timePeriod: {
			name: "Time Period",
			options: [
				{
					label: "Weekly",
					value: "weekly",
				},
				{
					label: "Monthly",
					value: "monthly",
				},
				{
					label: "Quarterly",
					value: "quarterly",
				},
				{
					label: "Yearly",
					value: "yearly",
				},
			],
		},
	},
	reportsFilters: {
		category: {
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
		timePeriod: {
			name: "Time Period",
			options: [
				{
					label: "Weekly",
					value: "weekly",
				},
				{
					label: "Monthly",
					value: "monthly",
				},
				{
					label: "Quarterly",
					value: "quarterly",
				},
				{
					label: "Yearly",
					value: "yearly",
				},
			],
		},
	},
});

export default AppConstants;

export type AppConstants = typeof AppConstants;
