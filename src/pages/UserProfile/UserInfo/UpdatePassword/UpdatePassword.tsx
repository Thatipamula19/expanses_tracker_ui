import Input from "@/Components/common/Modal/Input/Input";
import Modal from "@/Components/common/Modal/Modal";
import { useForm } from "react-hook-form";
import classes from "./updatePassword.module.css";
import { useMutation } from "@tanstack/react-query";
import ButtonLoader from "@/Components/common/Loaders/ButtonLoader/ButtonLoader";
import type { ChangePassword } from "@/types/user";
import { changePassword } from "@/services/userServices";
import { setCookies } from "@/utils/auth";
import { toast } from "react-toastify";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};
const UpdatePassword = ({ setOpen }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ChangePassword>({ mode: "all" });

    const { mutate, isPending } = useMutation({
        mutationFn: (data: ChangePassword) => (changePassword(data)),

        onSuccess: (data) => {
            setCookies("token", data?.access_token || "", 24 * 60); //24 hours
            setCookies("refresh_token", data?.refresh_token || "", 24 * 60);
            const user = {
                id: data?.user_id,
                email: data?.email,
                name: data?.user_name,
                role: data?.user_role,
            }
            setCookies("user_info", JSON.stringify(user), 24 * 60);
            setOpen(false);
            toast.success(data?.message);
        },

        onError: (error: any) => {
            console.log(error);
            toast.error(error?.err_msg);
        },
    });

    const onSubmit = (data: ChangePassword) => {
        mutate(data);
    };
    return (
        <>
            <Modal setOpen={setOpen}>
                <form className={classes?.form} onSubmit={handleSubmit(onSubmit)}>
                    <h3 className={classes?.title}>Update Password</h3>
                    <div className={classes?.form_fields}>
                        <Input type="text" placeholder="enter old password" {...register("old_password", {
                            required: true,
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,15}$/,
                                message: "old must include uppercase, lowercase, number and special character",
                            },
                            minLength: {
                                value: 6,
                                message: "old password must be at least 6 characters long",
                            },
                            maxLength: {
                                value: 15,
                                message: "old password must be at most 15 characters long",
                            }
                        })} />
                        <Input type="email" placeholder="enter new password" {...register("new_password", {
                            required: true,
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,15}$/,
                                message: "new must include uppercase, lowercase, number and special character",
                            },
                            minLength: {
                                value: 6,
                                message: "new password must be at least 6 characters long",
                            },
                            maxLength: {
                                value: 15,
                                message: "new password must be at most 15 characters long",
                            }
                        })} />
                        { (errors?.new_password || errors?.old_password) && <span className={classes?.error_msg}>{ errors?.new_password?.message || errors?.old_password?.message}</span>}
                    </div>
                    <div className={classes?.form_footer}>
                        <button type="button" onClick={() => setOpen(false)} className={classes?.cancel_btn}>
                            Cancel
                        </button>
                        <button type="submit" className={classes?.add_btn}>
                            {isPending ? <ButtonLoader /> : "Update"}
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default UpdatePassword