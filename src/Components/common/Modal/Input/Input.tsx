import AppConstants from "@/utils/AppConstants";
import classes from "./input.module.css";
import { forwardRef, useEffect, useRef, useState } from "react";
import type { FilterType } from "@/types/transactions";

/* ================= TYPES ================= */

type BaseProps = {
	placeholder?: string;
	halfWidth?: boolean;
};

type TextInputProps = BaseProps & React.InputHTMLAttributes<HTMLInputElement> & {
	type?: "text" | "password" | "email" | "number" | "date" | "search" | "tel";
};

type TextareaProps = BaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	type: "textarea";
};

type SelectProps = BaseProps & {
	type: "select";
	options?: FilterType[];
	name: string;
	value?: string;
	onChange?: (e: { target: { name: string; value: string } }) => void;
};

type InputProps = TextInputProps | TextareaProps | SelectProps;


/* ================= MAIN COMPONENT ================= */

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>((props, ref) => {
	const { type = "text", placeholder, halfWidth = false } = props;

	const renderInput = () => {
		if (type === "textarea") {
			const textareaProps = props as TextareaProps;
			return <Textarea placeholder={placeholder}  {...textareaProps} ref={ref as React.Ref<HTMLTextAreaElement>} />;
		}

		if (type === "select") {
			return <CustomSelect {...(props as SelectProps)} ref={ref as any} />;
		}

		return <PlainInput {...(props as TextInputProps)} ref={ref as any} />;
	};

	return <div className={`${classes.input_box} ${halfWidth ? classes.half_width : ""}`}>{renderInput()}</div>;
});

Input.displayName = "Input";
export default Input;

/* ================= INPUT ================= */

const PlainInput = forwardRef<HTMLInputElement, TextInputProps>(({ placeholder, ...rest }, ref) => {
	return <input className={classes.input} placeholder={placeholder} ref={ref} {...rest} />;
});

PlainInput.displayName = "PlainInput";

/* ================= TEXTAREA ================= */

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ placeholder, ...rest }, ref) => {
	return <textarea rows={2} className={classes.textarea} placeholder={placeholder} ref={ref} {...rest} />;
});

Textarea.displayName = "Textarea";

/* ================= CUSTOM SELECT ================= */

const CustomSelect = forwardRef<HTMLInputElement, SelectProps>(
	({ placeholder, options = [], name, value, onChange }, ref) => {
		const [open, setOpen] = useState(false);
		const [selectedValue, setSelectedValue] = useState<string>(value || "");

		const selectRef = useRef<HTMLDivElement>(null);

		useEffect(() => {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setSelectedValue(value || "");
		}, [value]);

		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
					setOpen(false);
				}
			};

			document.addEventListener("mousedown", handleClickOutside);
			return () => document.removeEventListener("mousedown", handleClickOutside);
		}, []);

		const handleSelect = (item: FilterType) => {
			setSelectedValue(item.value);
			setOpen(false);

			onChange?.({
				target: {
					name,
					value: item.value,
				},
			});
		};

		const selectedLabel = options.find((opt) => opt.value === selectedValue)?.label || placeholder;

		return (
			<div className={classes.dynamic_select} ref={selectRef} onClick={() => setOpen((prev) => !prev)}>
				<div className={classes.select_content}>
					<span className={`${classes.placeholder} ${selectedValue ? classes.has_value : ""}`}>
						{selectedLabel}
					</span>

					<img src={AppConstants.common.arrowDown} className={open ? classes.rotate : ""} alt="arrow" />
				</div>

				{open && (
					<ul className={classes.opt_list}>
						{options.map((item) => (
							<li
								key={item.value}
								className={`${classes.opt_item} ${selectedValue === item.value ? classes.active : ""}`}
								onClick={(e) => {
									e.stopPropagation();
									handleSelect(item);
								}}>
								{item.label}
							</li>
						))}
					</ul>
				)}

				{/* hidden input for RHF */}
				<input type="hidden" name={name} value={selectedValue} ref={ref} />
			</div>
		);
	},
);

CustomSelect.displayName = "CustomSelect";
