import { serviceErrorHandler } from "@/utils/errorHandler";
import api from "./apiClient";
import { type AxiosRequestConfig } from "axios";

interface ApiOptions extends AxiosRequestConfig {
	withAuth?: boolean;
}
export const getTransactions = async () => {
	try {
		const res = await api.get("transactions/get-statistics", { withAuth: true } as ApiOptions);
		return res.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const getFilteredTransactions = async (payload: any) => {
	try {
		const res = await api.post("transactions/get-filter-transactions", payload, { withAuth: true } as ApiOptions);
		return res.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const getOverview = async (params: any) => {
	try {
		const res = await api.get("transactions/get-overview", { withAuth: true, params: params } as ApiOptions);
		return res.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const getCategoryWiseExpenses = async (params: any) => {
	try {
		const res = await api.get("transactions/get-category-wise-expenses", {
			withAuth: true,
			params: params,
		} as ApiOptions);
		return res.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const createTransaction = async (data: any) => {
	try {
		const res = await api.post("transactions/add-transaction", data, { withAuth: true } as ApiOptions);
		return res.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const updateTransaction = async (data: any) => {
	try {
		const res = await api.put("transactions/update-transaction", data, { withAuth: true } as ApiOptions);
		return res.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const getTransaction = async (id: string) => {
	try {
		const res = await api.get(`transactions/get-transaction/${id}`, { withAuth: true } as ApiOptions);
		return res.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const deleteTransaction = async (id: string) => {
	try {
		const res = await api.delete(`transactions/delete-transaction/${id}`, { withAuth: true } as ApiOptions);
		return res.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const getCategories = async () => {
	try {
		const res = await api.get("categories", { withAuth: true } as ApiOptions);
		return res?.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};
