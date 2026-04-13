import logoLight from "@/assets/logos/logo_light.svg";
import AuthButton from "@/Components/common/AuthButton/AuthButton";
import DynamicInput from "@/Components/common/DynamicInput/DynamicInput";
import { forgotPassword } from "@/services/userServices";
import type { forgotPasswordFormTypes } from "@/types/auth";
import AppConstants from "@/utils/AppConstants";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../AuthLayout/AuthLayout";
import classes from "./forgotPassword.module.css";
import { toast } from "react-toastify";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<forgotPasswordFormTypes>({ mode: "all" });

  const { email } = AppConstants.icons;

  const handleClickSignup = () => {
    navigate("/sign-up");
  };

  const handleSignin = async (data: forgotPasswordFormTypes) => {
    mutate(data);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (data: forgotPasswordFormTypes) => forgotPassword(data?.email),

    onSuccess: (data) => {
      toast.success(data?.message);
    },

    onError: (error: any) => {
      toast.error(error?.err_msg);
    },
  });

  const getIsValid = () => {
    const email = watch("email");
    if (email && isValid && !isPending) return true;
    else return false;
  };
  return <>
    <AuthLayout>
      <div className={classes?.signin_left}>
        <h1 className={classes?.signin_title}>Forgot Password</h1>
        <form className={classes?.signin_form} onSubmit={handleSubmit(handleSignin)}>
          <DynamicInput
            iconLeft={email}
            placeholder="Enter your email address"
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
            disabled={isPending}
          />
          <AuthButton name="SEND" type="submit" disabled={!getIsValid()} loading={isPending} />
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
  </>;
};

export default ForgotPassword;
