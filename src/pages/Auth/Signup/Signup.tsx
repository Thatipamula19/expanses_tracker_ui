import googleIcon from "@/assets/authIcons/google.svg";
import logoLight from "@/assets/logos/logo_light.svg";
import AuthButton from "@/Components/common/AuthButton/AuthButton";
import DynamicInput from "@/Components/common/DynamicInput/DynamicInput";
import AppConstants from "@/utils/AppConstants";
import { useState } from "react";
import AuthLayout from "../AuthLayout/AuthLayout";
import classes from "./signup.module.css";

const Signup = () => {
	const [open, setOpen] = useState(false);

	const { email, lock, eyeClose, eyeOpen } = AppConstants.icons;

	const handleClickSignin = () => {
		window.location.href = "/sign-in";
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
				<form className={classes?.signup_form}>
					<DynamicInput iconLeft={email} placeholder="Name" type="text" />
					<DynamicInput iconLeft={email} placeholder="Email" type="email" />
					<DynamicInput
						iconLeft={lock}
						iconRight={open ? eyeOpen : eyeClose}
						placeholder="Password"
						rightIconHandler={() => setOpen(!open)}
						type={open ? "text" : "password"}
					/>
					<DynamicInput
						iconLeft={lock}
						iconRight={open ? eyeOpen : eyeClose}
						placeholder="Confirm Password"
						rightIconHandler={() => setOpen(!open)}
						type={open ? "text" : "password"}
					/>
					<AuthButton name="SIGN UP" type="submit" />
				</form>
			</div>
		</AuthLayout>
	);
};

export default Signup;
