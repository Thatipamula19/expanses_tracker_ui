export type SignInFormTypes = {
	email: string;
	password: string;
};

export type SignUpFormTypes = {
	user_name: string;
	email: string;
	password: string;
	confirmPassword?: string;
};

export type AuthBtnType = "submit" | "reset" | "button" | undefined;

export type AuthBtnProps = {
	name: string;
	type: AuthBtnType;
	clickHandler?: () => void;
	disabled?: boolean;
	loading?: boolean;
};

export type User = {
	name: string;
	email: string;
	id: string;
	role: string;
};

export type AuthState = {
	isAuthenticated: boolean;
	user: User;

	setUser: (user: User) => void;
	setAuthenticated: (isAuthenticated: boolean) => void;
};
