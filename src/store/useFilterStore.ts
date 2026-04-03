import { create } from "zustand";

const useFilterStore = create((set) => ({
	filter: {},
}));