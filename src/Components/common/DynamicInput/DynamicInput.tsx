import type { FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import classes from "./dynamicInput.module.css";
import { ErrorIcon } from "@/assets/svgs";

interface dynamicInputProps<T extends FieldValues> {
	name?: Path<T>;
	iconLeft?: string;
	iconRight?: string;
	placeholder: string;
	type: string;
	rightIconHandler?: () => void;
	register?: UseFormRegister<T>;
	rules?: RegisterOptions<T>;
	error?: string;
	disabled?: boolean;
}

const DynamicInput = <T extends FieldValues>({
	name,
	iconLeft,
	iconRight,
	placeholder,
	type,
	rightIconHandler,
	register,
	rules,
	error,
}: dynamicInputProps<T>) => {
	return (
		<div className={classes?.error_input_box}>
			<div className={`${classes?.dynamic_input_wrapper} ${error ? classes?.error : ""}`}>
				{iconLeft && <img src={iconLeft} alt="icon left" className={classes?.icon_left} />}
				<input
					type={type}
					placeholder={placeholder}
					className={classes?.dynamic_input}
					{...(register && register(name!, rules))}
					disabled
				/>
				{iconRight && (
					<img src={iconRight} alt="icon right" className={classes?.icon_right} onClick={rightIconHandler} />
				)}
			</div>
			{error && (
				<span className={classes?.error_message}>
					<ErrorIcon width={10} />
					{error}
				</span>
			)}
		</div>
	);
};

export default DynamicInput;
