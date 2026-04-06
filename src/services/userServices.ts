import type { SignInFormTypes, SignUpFormTypes } from "@/types/auth";
import { serviceErrorHandler } from "@/utils/errorHandler";
import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const login = async (credentials: SignInFormTypes) => {
	try {
		const res = await api.post("auth/login", credentials);
		return res.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};

export const signup = async (userData: SignUpFormTypes) => {
	try {
		const response = await api.post("auth/create", userData);
		return response?.data;
	} catch (error) {
		throw serviceErrorHandler(error);
	}
};
