import { serviceErrorHandler } from "@/utils/errorHandler";
import api from "./apiClient";
import { type AxiosRequestConfig } from "axios";

interface ApiOptions extends AxiosRequestConfig {
    withAuth?: boolean;
}
export const getBudgets = async () => {
    try {
        const res = await api.get("budgets", { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const getBudget = async (id: string) => {
    try {
        const res = await api.get(`budgets/${id}`, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const getBudgetStatistics = async (params: any) => {
    try {
        const res = await api.get("budgets/get-statistics", { withAuth: true, params: params } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const getFilteredBudgets = async (payload: any) => {
    try {
        const res = await api.post("budgets/get-filtered-budgets", payload, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
}

export const getInsights = async (params: any) => {
    try {
        const res = await api.get("budgets/get-insights", { withAuth: true, params: params } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const addBudget = async (data: any) => {
    try {
        const res = await api.post("budgets/add", data, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const updateBudget = async (data: any) => {
    try {
        const res = await api.put("budgets/update", data, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const deleteBudget = async (id: string) => {
    try {
        const res = await api.delete(`budgets/delete/${id}`, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};