import classes from "./input.module.css";

const Input = ({
	type,
	placeholder,
	halfWidth = false,
}: {
	type: string;
	placeholder: string;
	halfWidth?: boolean;
}) => {
	const renderInput = () => {
		if (type === "textarea") {
			return <Textarea placeholder={placeholder} />;
		} else if (type === "select") {
			return <Select placeholder={placeholder} />;
		}
		return <PlainInput type={type} placeholder={placeholder} />;
	};

	return (
		<>
			<div className={`${classes?.input_box} ${halfWidth ? classes?.half_width : ""}`}>{renderInput()}</div>
		</>
	);
};

export default Input;

const PlainInput = ({ type, placeholder }: { type: string; placeholder: string }) => {
	return <input type={type} placeholder={placeholder} className={classes?.input} />;
};

const Textarea = ({ placeholder }: { placeholder: string }) => {
	return <textarea rows={2} placeholder={placeholder} className={classes?.textarea} />;
};

const Select = ({ placeholder }: { placeholder: string }) => {
	return (
		<select className={classes?.input}>
			<option value="" disabled selected>
				{placeholder}
			</option>
			<option value="1">Category 1</option>
			<option value="2">Category 2</option>
		</select>
	);
};
