import type { AuthState, User } from "@/types/auth";
import { create } from "zustand";

const useAuthStore = create<AuthState>((set) => ({
	isAuthenticated: false,
	user: {} as User,
	setUser: (user) => set({ user }),
	setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));

export default useAuthStore;
