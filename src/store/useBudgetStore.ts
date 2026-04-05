import { create } from "zustand";
import AppConstants from "@/utils/AppConstants";
import type { BudgetStore } from "@/types/budgets";

const { date, category } = AppConstants?.budgetFilters || {};

const useBudgetStore = create<BudgetStore>((set) => ({
	budgets: [],
	date: date?.options?.[0] || "",
	category: category?.options?.[0] || "",

	setBudgets: (budgets) => set({ budgets }),
	setDate: (date) => set({ date }),
	setCategory: (category) => set({ category }),
}));

export default useBudgetStore;
