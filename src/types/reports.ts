import type { FilterType } from "./transactions";

export type ReportsStore = {
	timePeriod: FilterType;
	category: FilterType;
	pagination: {
		current: number;
		pageSize: number;
		total: number;
	};

	setTimePeriod: (timePeriod: FilterType) => void;
	setCategory: (category: FilterType) => void;
	setPagination: (pagination: ReportsStore["pagination"]) => void;
};
