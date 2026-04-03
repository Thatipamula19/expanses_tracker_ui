import type { AuthBtnProps } from "@/types/auth";
import classes from "./authButton.module.css";

const AuthButton = ({ name, type, clickHandler, disabled }: AuthBtnProps) => {
	return (
		<button type={type} className={classes?.auth_button} onClick={clickHandler} disabled={disabled}>
			{name}
		</button>
	);
};

export default AuthButton;
