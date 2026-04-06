import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import classes from "./mobileDrawer.module.css";

const MobileDrawer = ({ isOpen, toggleDrawer }: { isOpen: boolean; toggleDrawer: () => void }) => {
	return (
		<Drawer open={isOpen} onClose={toggleDrawer} direction="right" className={classes?.drawer}>
			<div className={classes?.drawer_content}></div>
		</Drawer>
	);
};

export default MobileDrawer;
