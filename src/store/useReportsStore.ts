import type { ReportsStore } from "@/types/reports";
import AppConstants from "@/utils/AppConstants";
import { create } from "zustand";

const { category, timePeriod } = AppConstants?.reportsFilters || {};

const useReportsStore = create<ReportsStore>((set) => ({
	category: category?.options[0] || {},
	timePeriod: timePeriod?.options[0] || {},
	pagination: {
		current: 1,
		pageSize: 10,
		total: 3,
	},

	setCategory: (category) => set({ category }),
	setTimePeriod: (timePeriod) => set({ timePeriod }),
	setPagination: (pagination) => set({ pagination }),
}));

export default useReportsStore;
