import { create } from "zustand";
import AppConstants from "@/utils/AppConstants";
import type { BudgetStore } from "@/types/budgets";

const { date, category } = AppConstants?.budgetFilters || {};

const useBudgetStore = create<BudgetStore>((set) => ({
	budgets: [],
	date: date?.options?.[0] || "",
	category: category?.options?.[0] || "",
	pagination: {
		current: 1,
		pageSize: 10,
		total: 3,
	},

	setBudgets: (budgets) => set({ budgets }),
	setDate: (date) => set({ date }),
	setCategory: (category) => set({ category }),
	setPagination: (pagination) => set({ pagination }),
}));

export default useBudgetStore;
