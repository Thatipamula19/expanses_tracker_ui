import type { FilterType } from "./transactions";

export type StatsTypes = {
	id: string;
	title: string;
	value: number;
	desc?: string;
	used?: number;
	spentValue?: number;
};

export type Budget = {
	id: string;
	limit: number;
	spent: number;
	category: string;
	date: string;
	note?: string;
};

export type BudgetStore = {
	budgets: Budget[];
	date: FilterType;
	category: FilterType;
	pagination: {
		current: number;
		pageSize: number;
		total: number;
	};

	setDate: (date: FilterType) => void;
	setCategory: (category: FilterType) => void;
	setBudgets: (budgets: Budget[]) => void;
	setPagination: (pagination: BudgetStore["pagination"]) => void;
};
