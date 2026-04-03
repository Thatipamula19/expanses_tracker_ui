import googleIcon from "@/assets/authIcons/google.svg";
import logoLight from "@/assets/logos/logo_light.svg";
import AuthButton from "@/Components/common/AuthButton/AuthButton";
import DynamicInput from "@/Components/common/DynamicInput/DynamicInput";
import AppConstants from "@/utils/AppConstants";
import { useState } from "react";
import AuthLayout from "../AuthLayout/AuthLayout";
import classes from "./signup.module.css";
import { useForm } from "react-hook-form";
import type { SignUpFormTypes } from "@/types/auth";

const Signup = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm<SignUpFormTypes>({ mode: "all" });

	const [open, setOpen] = useState(false);

	const { email, lock, eyeClose, eyeOpen } = AppConstants.icons;

	const handleClickSignin = () => {
		window.location.href = "/sign-in";
	};

	const handleSignup = async (data: SignUpFormTypes) => {
		console.log(data);
	};

	const getIsValid = () => {
		const name = watch("name");
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
						name="name"
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
						error={errors.name ? errors.name?.message : ""}
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
								value: /^[a-zA-Z0-9_]+$/,
								message: "password must contain only letters, numbers, and underscores",
							},
							minLength: {
								value: 6,
								message: "password must be at least 6 characters long",
							},
							maxLength: {
								value: 12,
								message: "password must be at most 12 characters long",
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
					<AuthButton name="SIGN UP" type="submit" disabled={!getIsValid()} />
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
