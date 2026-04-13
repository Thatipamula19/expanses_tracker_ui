import type { FilterType } from "./transactions";

export type Goal = {
	goal_id: string;
	goal_name: string;
	target_amount: number;
	saved_amount: number;
	category_id: string;
	start_date: string;
	end_date: string;
	status: string;
	category_icon: string;
	category_name: string;
	progress_percent: number;
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
