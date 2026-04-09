import { serviceErrorHandler } from "@/utils/errorHandler";
import api from "./apiClient";
import { type AxiosRequestConfig } from "axios";

interface ApiOptions extends AxiosRequestConfig {
    withAuth?: boolean;
}

export const getReports = async (params: any) => {
    try {
        const res = await api.get("analytics", { withAuth: true, params: params } as ApiOptions);
        return res.data;
    } catch (error) {
        throw serviceErrorHandler(error);
    }
};