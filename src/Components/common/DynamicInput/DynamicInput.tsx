import classes from "./dynamicInput.module.css";

const DynamicInput = ({
	iconLeft,
	iconRight,
	placeholder,
	type,
	rightIconHandler,
}: {
	iconLeft?: string;
	iconRight?: string;
	placeholder: string;
	type: string;
	rightIconHandler?: () => void;
}) => {
	return (
		<div className={classes?.dynamic_input_wrapper}>
			{iconLeft && <img src={iconLeft} alt="icon left" className={classes?.icon_left} />}
			<input type={type} placeholder={placeholder} className={classes?.dynamic_input} />
			{iconRight && (
				<img src={iconRight} alt="icon right" className={classes?.icon_right} onClick={rightIconHandler} />
			)}
		</div>
	);
};

export default DynamicInput;
