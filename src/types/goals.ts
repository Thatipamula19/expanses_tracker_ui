import type { FilterType } from "./transactions";

export type Goal = {
	id: string;
	title: string;
	target: number;
	saved: number;
	category: string;
	start_date: string;
	end_date: string;
	status: string;
};

export type GoalsStore = {
	goals: Goal[];
	status: FilterType;
	timePeriod: FilterType;
	pagination: {
		current: number;
		pageSize: number;
		total: number;
	};

	setGoals: (goals: Goal[]) => void;
	setStatus: (status: FilterType) => void;
	setTimePeriod: (timePeriod: FilterType) => void;
	setPagination: (pagination: GoalsStore["pagination"]) => void;
};
