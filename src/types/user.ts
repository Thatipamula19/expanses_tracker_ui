export type UpdateUser = {
	user_name: string;
    email: string;
};

export type ChangePassword = {
	old_password: string;
    new_password: string;
};