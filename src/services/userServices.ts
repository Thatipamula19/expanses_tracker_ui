import type { SignInFormTypes, SignUpFormTypes } from "@/types/auth";
import { serviceErrorHandler } from "@/utils/errorHandler";
import api from "./apiClient";
import { type AxiosRequestConfig } from "axios";

interface ApiOptions extends AxiosRequestConfig {
  withAuth?: boolean;
}


export const login = async (credentials: SignInFormTypes) => {
	try {
		const res = await api.post("auth/login", credentials, { withAuth: false } as ApiOptions);
		return res.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const signup = async (userData: SignUpFormTypes) => {
	try {
		const response = await api.post("auth/create", userData, { withAuth: false } as ApiOptions);
		return response?.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const logout = async () => {
	try {
		const response = await api.post("auth/logout", {}, { withAuth: false } as ApiOptions);
		return response?.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const refreshToken = async (payload: { refresh_token: string }) => {
	try {
		const response = await api.post("auth/refresh-token", payload, { withAuth: false } as ApiOptions);
		return response?.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const getUserInfo = async () => {
	try {
		const response = await api.get("auth/user-info", { withAuth: true } as ApiOptions );
		return response?.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const forgotPassword = async (email: string) => {
	try {
		const response = await api.post("auth/forgot-password", { email }, { withAuth: false } as ApiOptions);
		return response?.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const resetPassword = async (data: any) => {
	try {
		const response = await api.post("auth/reset-password", data, { withAuth: false } as ApiOptions);
		return response?.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const changePassword = async (data: any) => {
	try {
		const response = await api.post("auth/change-password", data, { withAuth: true } as ApiOptions);
		return response?.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

