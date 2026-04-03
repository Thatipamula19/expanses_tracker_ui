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
});

export default AppConstants;

export type AppConstants = typeof AppConstants;
