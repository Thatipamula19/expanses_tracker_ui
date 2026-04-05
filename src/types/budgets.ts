import type { FilterType } from "./transactions";

export type StatsTypes = {
	title: string;
	value: number;
	desc?: string;
	used?: number;
	spentValue?: number;
}

export type Budget = {
	id: string;
	title: string;
	limit: number;
	spent: number;
	remaining: number;
	category: string;
};

export type BudgetStore = {
	budgets: Budget[];
	date: FilterType;
	category: FilterType;
	setDate: (date: FilterType) => void;
	setCategory: (category: FilterType) => void;
	setBudgets: (budgets: Budget[]) => void;
};
