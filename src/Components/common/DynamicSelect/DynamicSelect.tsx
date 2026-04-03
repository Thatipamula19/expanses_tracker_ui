import AppConstants from "@/utils/AppConstants";
import classes from "./dynamicSelect.module.css";

const DynamicSelect = ({ options }: { options: { label: string; value: string }[] }) => {
	return (
		<div className={classes?.dynamic_select}>
			<div className={classes?.select_content}>
				<span className={classes?.placeholder}>{options[0].label}</span>
				<img src={AppConstants?.common?.arrowDown} alt="arrow down" />
			</div>
			<ul className={classes?.opt_list}>
				{options.map((item) => (
					<li className={classes?.opt_item}>{item.label}</li>
				))}
			</ul>
		</div>
	);
};

export default DynamicSelect;
