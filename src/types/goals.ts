import type { FilterType } from "./transactions";

export type Goal = {
	id: string;
	title: string;
	target: number;
	saved: number;
	category: string;
	startDate: string;
	endDate: string;
};

export type GoalsStore = {
	goals: Goal[];
	status: FilterType;
	timePeriod: FilterType;

	setGoals: (goals: Goal[]) => void;
	setStatus: (status: FilterType) => void;
	setTimePeriod: (timePeriod: FilterType) => void;
};
