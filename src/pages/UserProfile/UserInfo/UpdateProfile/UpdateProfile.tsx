import Input from "@/Components/common/Modal/Input/Input";
import Modal from "@/Components/common/Modal/Modal";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "./updateProfile.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ButtonLoader from "@/Components/common/Loaders/ButtonLoader/ButtonLoader";
import type { UpdateUser } from "@/types/user";
import { updateUserInfo } from "@/services/userServices";
import { toast } from "react-toastify";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    user_info?: UpdateUser;
};
const UpdateProfile = ({ setOpen, user_info }: Props) => {
    const queryClient = useQueryClient();
    const { register, handleSubmit, reset } = useForm<UpdateUser>();

    useEffect(() => {
        if (user_info) {
            reset({
                user_name: user_info.user_name,
                email: user_info.email
            });
        }
    }, [user_info, reset]);

    const { mutate, isPending } = useMutation({
        mutationFn: (data: UpdateUser) => (updateUserInfo(data)),

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["user-info"],
            });
            toast.success(data?.message);
            setOpen(false);
        },
    });

    const onSubmit = (data: UpdateUser) => {
        mutate(data);
    };
    return (
        <>
            <Modal setOpen={setOpen}>
                <form className={classes?.form} onSubmit={handleSubmit(onSubmit)}>
                    <h3 className={classes?.title}>Update Profile</h3>
                    <div className={classes?.form_fields}>
                        <Input type="text" placeholder="user name" {...register("user_name", {
                            required: true,
                            pattern: {
                                value: /^[A-Za-z][A-Za-z\s]*$/,
                                message: "please enter only letters",
                            },
                            minLength: {
                                value: 3,
                                message: "please enter at least 3 characters",
                            }
                        })} />
                        <Input type="email" placeholder="email" {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                message: "please enter a valid email address",
                            },
                        })} />
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

export default UpdateProfile