import type { GoalsStore } from "@/types/goals";
import AppConstants from "@/utils/AppConstants";
import { create } from "zustand";

const { status, timePeriod } = AppConstants?.goalsFilters || {};

const useGoalsStore = create<GoalsStore>((set) => ({
	goals: [],
	status: status?.options[0] || {},
	timePeriod: timePeriod?.options[0] || {},
	setGoals: (goals) => set({ goals }),
	setStatus: (status) => set({ status }),
	setTimePeriod: (timePeriod) => set({ timePeriod }),
}));

export default useGoalsStore;

export type { GoalsStore };