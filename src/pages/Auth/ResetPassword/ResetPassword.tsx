import logoLight from "@/assets/logos/logo_light.svg";
import AuthButton from "@/Components/common/AuthButton/AuthButton";
import DynamicInput from "@/Components/common/DynamicInput/DynamicInput";
import type { ResetPasswordFormTypes } from "@/types/auth";
import AppConstants from "@/utils/AppConstants";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../AuthLayout/AuthLayout";
import classes from "./resetPassword.module.css";
import { resetPassword } from "@/services/userServices";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
const ResetPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ResetPasswordFormTypes>({ mode: "all" });
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const token = searchParams.get("token");

  const { lock, eyeClose, eyeOpen } = AppConstants.icons;

  const handleClickSignin = () => {
    navigate("/sign-in");
  };

  const handleSignup = async (data: ResetPasswordFormTypes) => {
    delete data.confirmPassword;
    data.token = token;
    mutate(data);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ResetPasswordFormTypes) => resetPassword(data),
    onSuccess: (data) => {
      toast.success(data?.message);
      navigate("/sign-in");
    },
    onError: (error: any) => {
      toast.error(error?.err_msg);
    },
  });

  const getIsValid = () => {
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");
    if (password && confirmPassword && isValid) return true;
    else return false;
  };
  return <>
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
        <h1 className={classes?.signup_title}>Reset Password</h1>
        <form className={classes?.signup_form} onSubmit={handleSubmit(handleSignup)}>
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
            disabled={isPending}
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
            disabled={isPending}
          />
          <AuthButton name="RESET PASSWORD" type="submit" disabled={!getIsValid()} loading={isPending} />
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
  </>;
};

export default ResetPassword;
