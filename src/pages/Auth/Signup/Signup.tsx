import googleIcon from "@/assets/authIcons/google.svg";
import logoLight from "@/assets/logos/logo_light.svg";
import AuthButton from "@/Components/common/AuthButton/AuthButton";
import DynamicInput from "@/Components/common/DynamicInput/DynamicInput";
import type { SignUpFormTypes } from "@/types/auth";
import AppConstants from "@/utils/AppConstants";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../AuthLayout/AuthLayout";
import classes from "./signup.module.css";
import { signup } from "@/services/userServices";
import { setCookies } from "@/utils/auth";
import useAuthStore from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm<SignUpFormTypes>({ mode: "all" });
	const { setUser, setAuthenticated } = useAuthStore();

	const [open, setOpen] = useState(false);

	const { email, lock, eyeClose, eyeOpen } = AppConstants.icons;

	const handleClickSignin = () => {
		window.location.href = "/sign-in";
	};

	const handleSignup = async (data: SignUpFormTypes) => {
		delete data.confirmPassword;
		mutate(data);
	};

	const { mutate, isPending } = useMutation({
		mutationFn: (data: SignUpFormTypes) => signup(data),
		onSuccess: (data) => {
			setCookies("token", data?.access_token || "", 24 * 60); //24 hours
			setCookies("refresh_token", data?.refresh_token || "", 24 * 60);
			setAuthenticated(true);
			const user = {
				id: data?.user_id,
				email: data?.email,
				name: data?.user_name,
				role: data?.user_role,
			};
			setUser(user);
			setCookies("user_info", JSON.stringify(user), 24 * 60);
			navigate("/");
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const getIsValid = () => {
		const name = watch("user_name");
		const email = watch("email");
		const password = watch("password");
		const confirmPassword = watch("confirmPassword");
		if (name && email && password && confirmPassword && isValid) return true;
		else return false;
	};

	return (
		<AuthLayout>
			<div className={classes?.signup_left}>
				<img src={logoLight} alt="logo secondary" className={classes?.signup_logo} />
				<div className={classes?.signup_signin}>
					<strong className={classes?.signup_signin_title}>Welcome Back</strong>
					<p className={classes?.signup_signin_desc}>Log in to manage your finances</p>
					<AuthButton name="SIGN IN" type="button" clickHandler={handleClickSignin} />
				</div>
			</div>
			<div className={classes?.signup_right}>
				<h1 className={classes?.signup_title}>Create Account</h1>
				<img src={googleIcon} alt="google icon" className={classes?.signup_google} />
				<span className={classes?.signup_or}>or use your email for registration</span>
				<form className={classes?.signup_form} onSubmit={handleSubmit(handleSignup)}>
					<DynamicInput
						placeholder="Name"
						type="text"
						register={register}
						name="user_name"
						rules={{
							required: true,
							pattern: {
								value: /^[A-Za-z][A-Za-z\s]*$/,
								message: "please enter only letters",
							},
							minLength: {
								value: 3,
								message: "please enter at least 3 characters",
							},
						}}
						error={errors.user_name ? errors.user_name?.message : ""}
					/>
					<DynamicInput
						iconLeft={email}
						placeholder="Email"
						type="email"
						register={register}
						name="email"
						rules={{
							required: true,
							pattern: {
								value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
								message: "please enter a valid email address",
							},
						}}
						error={errors.email ? errors.email?.message : ""}
					/>
					<DynamicInput
						iconLeft={lock}
						iconRight={open ? eyeOpen : eyeClose}
						placeholder="Password"
						rightIconHandler={() => setOpen(!open)}
						type={open ? "text" : "password"}
						register={register}
						name="password"
						rules={{
							required: true,
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,15}$/,
								message: "must include uppercase, lowercase, number and special character",
							},
							minLength: {
								value: 6,
								message: "password must be at least 6 characters long",
							},
							maxLength: {
								value: 15,
								message: "password must be at most 15 characters long",
							},
						}}
						error={errors.password ? errors.password?.message : ""}
					/>
					<DynamicInput
						iconLeft={lock}
						iconRight={open ? eyeOpen : eyeClose}
						placeholder="Confirm Password"
						rightIconHandler={() => setOpen(!open)}
						type={open ? "text" : "password"}
						register={register}
						name="confirmPassword"
						rules={{
							required: "Confirm password is required",
							validate: (value) => value === watch("password") || "Passwords do not match",
						}}
						error={errors.confirmPassword?.message || ""}
					/>
					<AuthButton name="SIGN UP" type="submit" disabled={!getIsValid()} loading={isPending} />
					<div className={classes?.signup_or_line}>
						<hr /> <span>OR</span> <hr />
					</div>
					<span className={classes?.dont_have_acc}>
						Have an account?{"  "}
						<a href="/sign-in" className={classes?.signup_forgot}>
							Sign in
						</a>
					</span>
				</form>
			</div>
		</AuthLayout>
	);
};

export default Signup;
