import AuthLayout from "../AuthLayout/AuthLayout";
import googleIcon from "@/assets/authIcons/google.svg";
import logoLight from "@/assets/logos/logo_light.svg";
import classes from "./signin.module.css";
import AuthButton from "@/Components/common/AuthButton/AuthButton";
import AppConstants from "@/utils/AppConstants";
import DynamicInput from "@/Components/common/DynamicInput/DynamicInput";
import { useState } from "react";

const Signin = () => {
	const [open, setOpen] = useState(false);

	const { email, lock, eyeClose, eyeOpen } = AppConstants.icons;

	const handleClickSignup = () => {
		window.location.href = "/sign-up";
	};

	return (
		<AuthLayout>
			<div className={classes?.signin_left}>
				<h1 className={classes?.signin_title}>Sign in to FinTrack</h1>
				<img src={googleIcon} alt="google icon" className={classes?.signin_google} />
				<span className={classes?.signin_or}>or use your account</span>
				<form className={classes?.signin_form}>
					<DynamicInput iconLeft={email} placeholder="Enter your email" type="email" />
					<DynamicInput
						iconLeft={lock}
						iconRight={open ? eyeOpen : eyeClose}
						placeholder="Enter your password"
						rightIconHandler={() => setOpen(!open)}
						type={open ? "text" : "password"}
					/>
					<a href="/forgot-password" className={classes?.signin_forgot}>
						Forgot your password?
					</a>
					<AuthButton name="SIGN IN" type="submit" />
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
