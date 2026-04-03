export type SignInFormTypes = {
	email: string;
	password: string;
};

export type SignUpFormTypes = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export type AuthBtnType = "submit" | "reset" | "button" | undefined;

export type AuthBtnProps = {
	name: string;
	type: AuthBtnType;
	clickHandler?: () => void;
	disabled?: boolean;
};
