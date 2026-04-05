import emailIcon from "@/assets/authIcons/email.svg";
import lockIcon from "@/assets/authIcons/lock.svg";
import eyeOpenIcon from "@/assets/authIcons/eye_open.svg";
import eyeCloseIcon from "@/assets/authIcons/eye_close.svg";
import notificationIcon from "@/assets/header/notification.svg";
import notificationHoverHoverIcon from "@/assets/header/notification_hover.svg";
import userIcon from "@/assets/header/user.svg";
import userHoverIcon from "@/assets/header/user_hover.svg";

import logoLight from "@/assets/logos/logo_light.svg";
import logoPrimary from "@/assets/logos/logo_primary.svg";
import logoSecondary from "@/assets/logos/logo_secondary.svg";

import plusIcon from "@/assets/common/plus.svg";
import pencilIcon from "@/assets/common/pencil.svg";
import trashIcon from "@/assets/common/trash.svg";
import arrowDownIcon from "@/assets/common/arrow_down.svg";

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
					value: "newestFirst",
				},
				{
					label: "Oldest First",
					value: "oldestFirst",
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
					value: "jan2026",
				},
				{
					label: "Feb 2026",
					value: "feb2026",
				},
				{
					label: "Mar 2026",
					value: "mar2026",
				},
				{
					label: "Apr 2026",
					value: "apr2026",
				},
				{
					label: "May 2026",
					value: "may2026",
				},
				{
					label: "Jun 2026",
					value: "jun2026",
				},
				{
					label: "Jul 2026",
					value: "jul2026",
				},
				{
					label: "Aug 2026",
					value: "aug2026",
				},
				{
					label: "Sep 2026",
					value: "sep2026",
				},
				{
					label: "Oct 2026",
					value: "oct2026",
				},
				{
					label: "Nov 2026",
					value: "nov2026",
				},
				{
					label: "Dec 2026",
					value: "dec2026",
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
});

export default AppConstants;

export type AppConstants = typeof AppConstants;
