import AppConstants from "@/utils/AppConstants";
import HoverBtn from "../HoverBtn/HoverBtn";
import classes from "./header.module.css";

const navItems = [
	{
		name: "Dashboard",
		link: "/",
	},
	{
		name: "Transactions",
		link: "/transactions",
	},
	{
		name: "Budget",
		link: "/budget",
	},
	{
		name: "Goals",
		link: "/goals",
	},
	{
		name: "Reports",
		link: "/reports",
	},
];

const Header = () => {
	return (
		<nav className={classes?.header_container}>
			<img src={AppConstants.logos.secondary} alt="logo secondary" className={classes?.header_logo} />

			<ul className={classes?.nav_items}>
				{navItems.map((item) => (
					<li key={item.name} className={classes?.nav_item}>
						<a href={item.link} className={classes?.nav_link}>
							{item.name}
						</a>
					</li>
				))}
			</ul>

			<div className={classes?.profile_notification}>
				<HoverBtn
					img={AppConstants.icons.notification}
					imgHover={AppConstants.icons.notificationHover}
					clickHandler={() => {}}
				/>

				<HoverBtn
					img={AppConstants.icons.user}
					imgHover={AppConstants.icons.userHover}
					clickHandler={() => {}}
				/>
			</div>
		</nav>
	);
};

export default Header;
