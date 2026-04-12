import AppConstants from "@/utils/AppConstants";
import HoverBtn from "../HoverBtn/HoverBtn";
import classes from "./header.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MenuIcon } from "@/assets/svgs";
import MobileDrawer from "./MobileDrawer/MobileDrawer";
import { useState } from "react";

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
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<>
			<nav className={classes?.header_container}>
				<img src={AppConstants.logos.secondary} alt="logo secondary" className={classes?.header_logo} />

				<ul className={classes?.nav_items}>
					{navItems.map((item) => (
						<li key={item.name} className={classes?.nav_item}>
							<Link
								to={item.link}
								className={`${classes?.nav_link} ${location.pathname === item.link ? classes?.active : ""}`}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>

				<div className={classes?.profile_notification}>
					{/* <HoverBtn
						img={AppConstants.icons.notification}
						imgHover={AppConstants.icons.notificationHover}
						clickHandler={() => {}}
					/> */}

					<HoverBtn
						img={ location.pathname === "/user-profile" ? AppConstants.icons.userHover : AppConstants.icons.user}
						imgHover={AppConstants.icons.userHover}
						clickHandler={() => {
							if (location.pathname !== "/user-profile") {
								navigate("/user-profile");
							}
						}}
					/>
				</div>
				<button className={classes?.mob_menu_btn} onClick={() => setIsOpen(!isOpen)}>
					<MenuIcon />
				</button>
			</nav>
			<MobileDrawer isOpen={isOpen} toggleDrawer={() => setIsOpen(!isOpen)} />
		</>
	);
};

export default Header;
