import { create } from "zustand";
import AppConstants from "@/utils/AppConstants";
import type { BudgetStore } from "@/types/budgets";

const { date, category } = AppConstants?.budgetFilters || {};
const currentDate = new Date();
const formattedMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
const currentValue = `${currentDate.getFullYear()}-${formattedMonth}`;

const useBudgetStore = create<BudgetStore>((set) => ({
	budgets: [],
	date: date?.options?.find(({ value }) => value === currentValue) || date?.options?.[0] || "",
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
