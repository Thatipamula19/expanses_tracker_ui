import type { FilterItem } from "@/types/transactions";
import DynamicSelect from "../DynamicSelect/DynamicSelect";
import classes from "./filter.module.css";

const Filter = ({ filters }: { filters: FilterItem[] }) => {
	return (
		<section className={classes?.filter_sec}>
			{filters.map((filter) => (
				<DynamicSelect
					key={filter.id}
					options={filter.options}
					value={filter.value}
					setterFn={filter.setValue}
				/>
			))}
		</section>
	);
};

export default Filter;
