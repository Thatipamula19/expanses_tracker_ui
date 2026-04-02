import classes from "./authButton.module.css";

const AuthButton = ({
	name,
	type,
	clickHandler,
}: {
	name: string;
	type: "submit" | "reset" | "button" | undefined;
	clickHandler?: () => void;
}) => {
	return (
		<button type={type} className={classes?.auth_button} onClick={clickHandler}>
			{name}
		</button>
	);
};

export default AuthButton;
