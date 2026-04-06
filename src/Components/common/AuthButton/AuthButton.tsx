import type { AuthBtnProps } from "@/types/auth";
import classes from "./authButton.module.css";
import ButtonLoader from "../Loaders/ButtonLoader/ButtonLoader";

const AuthButton = ({ name, type, clickHandler, disabled, loading }: AuthBtnProps) => {
	return (
		<button type={type} className={classes?.auth_button} onClick={clickHandler} disabled={disabled || loading}>
			{loading ? <ButtonLoader /> : name}
		</button>
	);
};

export default AuthButton;
