import type { AuthState, User } from "@/types/auth";
import { getCookies } from "@/utils/auth";
import { create } from "zustand";

const userInfo = getCookies("user_info");
const token = getCookies("token");

const initialState = {
	isAuthenticated: !!(userInfo && token),
	user: userInfo ? (JSON.parse(userInfo) as User) : ({} as User),
};

const useAuthStore = create<AuthState>((set) => ({
	...initialState,
	setUser: (user) => set({ user }),
	setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));

export default useAuthStore;
