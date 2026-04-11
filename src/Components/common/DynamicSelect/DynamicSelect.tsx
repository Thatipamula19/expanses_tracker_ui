import AppConstants from "@/utils/AppConstants";
import classes from "./dynamicSelect.module.css";
import type { FilterType } from "@/types/transactions";
import { useEffect, useRef, useState } from "react";

const DynamicSelect = ({
	options,
	value,
	setterFn,
}: {
	options: { label: string; value: string }[];
	value: FilterType;
	setterFn: (value: FilterType) => void;
}) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	const handleClick = (item: FilterType) => {
		setterFn(item);
		setOpen(false);
	};

	return (
		<div className={classes?.dynamic_select} onClick={() => setOpen(!open)} ref={ref}>
			<div className={classes?.select_content}>
				<span className={classes?.placeholder}>{value?.label || options[0].label}</span>
				<img src={AppConstants?.common?.arrowDown} className={open ? classes?.rotate : ""} alt="arrow down" />
			</div>
			{open && (
				<ul className={classes?.opt_list}>
					{options.map((item) => (
						<li 
							key={`dynamic_select_${item.value}`}
							className={`${classes?.opt_item} ${value?.value === item.value ? classes?.active : ""}`}
							onClick={(e) => {
								e.stopPropagation();
								handleClick(item);
							}}>
							{item.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default DynamicSelect;
