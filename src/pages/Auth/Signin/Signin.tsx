import AuthLayout from "../AuthLayout/AuthLayout";
import googleIcon from "@/assets/authIcons/google.svg";
import logoLight from "@/assets/logos/logo_light.svg";
import classes from "./signin.module.css";
import AuthButton from "@/Components/common/AuthButton/AuthButton";
import AppConstants from "@/utils/AppConstants";
import DynamicInput from "@/Components/common/DynamicInput/DynamicInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SignInFormTypes } from "@/types/auth";

const Signin = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
	} = useForm<SignInFormTypes>({ mode: "all" });
	const [open, setOpen] = useState(false);

	const { email, lock, eyeClose, eyeOpen } = AppConstants.icons;

	const handleClickSignup = () => {
		window.location.href = "/sign-up";
	};

	const handleSignin = async (data: SignInFormTypes) => {
		console.log(data);
	};

	const getIsValid = () => {
		const email = watch("email");
		const password = watch("password");
		if (email && password && isValid) return true;
		else return false;
	};

	return (
		<AuthLayout>
			<div className={classes?.signin_left}>
				<h1 className={classes?.signin_title}>Sign in to FinTrack</h1>
				<img src={googleIcon} alt="google icon" className={classes?.signin_google} />
				<span className={classes?.signin_or}>or use your account</span>
				<form className={classes?.signin_form} onSubmit={handleSubmit(handleSignin)}>
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
					<a href="/forgot-password" className={classes?.signin_forgot}>
						Forgot your password?
					</a>
					<AuthButton name="SIGN IN" type="submit" disabled={!getIsValid()} />
					<div className={classes?.signin_or_line}>
						<hr /> <span>OR</span> <hr />
					</div>
					<span className={classes?.dont_have_acc}>
						Don't have an account?{"  "}
						<a href="/sign-up" className={classes?.signin_forgot}>
							Sign up
						</a>
					</span>
				</form>
			</div>
			<div className={classes?.signin_right}>
				<img src={logoLight} alt="logo secondary" className={classes?.signin_logo} />
				<div className={classes?.signin_signup}>
					<strong className={classes?.signin_signup_title}>Hello, Friend!</strong>
					<p className={classes?.signin_signup_desc}>Enter your personal details and start journey with us</p>
					<AuthButton name="SIGN UP" type="button" clickHandler={handleClickSignup} />
				</div>
			</div>
		</AuthLayout>
	);
};

export default Signin;
