import type { TransactionsStore } from "@/types/transactions";
import AppConstants from "@/utils/AppConstants";
import { create } from "zustand";

const { date, category, transactionType, sort } = AppConstants?.transactionFilters || {};

const useTransactionsStore = create<TransactionsStore>((set) => ({
	transactions: [],
	date: date?.options?.[0] || "",
	category: category?.options?.[0],
	transactionType: transactionType?.options?.[0] || "",
	sort: sort?.options?.[0] || "",

	setTransactions: (transactions) => set({ transactions }),
	setDate: (date) => set({ date }),
	setCategory: (category) => set({ category }),
	setTransactionType: (transactionType) => set({ transactionType }),
	setSort: (sort) => set({ sort }),
}));

export default useTransactionsStore;
