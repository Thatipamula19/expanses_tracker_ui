import { serviceErrorHandler } from "@/utils/errorHandler";
import api from "./apiClient";
import { type AxiosRequestConfig } from "axios";

interface ApiOptions extends AxiosRequestConfig {
    withAuth?: boolean;
}

export const getFilteredGoals = async (params: any) => {
    try {
        const res = await api.get("goals/get-filtered-goals", { withAuth: true, params: params } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const getOverviewGoals = async (params: any) => {
    try {
        const res = await api.get("goals/overview", { withAuth: true, params: params } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
}

export const addGoal = async (data: any) => {
    try {
        const res = await api.post("goals/add", data, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const updateGoal = async (data: any) => {
    try {
        const res = await api.put("goals/update", data, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const deleteGoal = async (id: string) => {
    try {
        const res = await api.delete(`goals/delete/${id}`, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const getGoal = async (id: string) => {
    try {
        const res = await api.get(`goals/${id}`, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const getAllGoals = async () => {
    try {
        const res = await api.get("goals/all", { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const addContribution = async (data: any) => {
    try {
        const res = await api.post("goals/add-contribution", data, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const updateContribution = async (data: any) => {
    try {
        const res = await api.put("goals/update-contribution", data, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const getContribution = async (id: string) => {
    try {
        const res = await api.get(`goals/contribution/${id}`, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};

export const deleteContribution = async (id: string) => {
    try {
        const res = await api.delete(`goals/delete-contribution/${id}`, { withAuth: true } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};