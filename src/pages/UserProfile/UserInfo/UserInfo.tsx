import AppConstants from "@/utils/AppConstants"
import classes from "./userInfo.module.css"
import { useState } from "react";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import { removeCookies } from "@/utils/auth";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
const UserInfo = ({ user_info }: any) => {
  const { setUser, setAuthenticated } = useAuthStore()
  const [openProfilePopup, setOpenProfilePopup] = useState<boolean>(false);
  const [openChangePassPopup, setOpenChangePassPopup] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuthenticated(false);
    setUser({} as any);
    removeCookies("token");
    removeCookies("refresh_token");
    removeCookies("user_info");
    navigate("/sign-in");
  }

  return (
    <>
      <div className={`${classes?.user_info}`}>
        <img src={AppConstants.icons.user} alt="" className={`${classes?.user_img}`} />
        <p className={`${classes?.user_name}`}>Name: {user_info?.user_name}</p>
        <p className={`${classes?.user_email}`}>Email: {user_info?.email} </p>
        <div className={`${classes?.user_actions}`}>
          <button type="button" className={`${classes?.edit_btn}`} onClick={() => setOpenProfilePopup(true)}>Edit Profile</button>
          <button type="button" className={`${classes?.change_pass_btn}`} onClick={() => setOpenChangePassPopup(true)}>Change Password</button>
          <button type="button" className={`${classes?.logout_btn}`} onClick={handleLogout}>Logout</button>
        </div>
      </div>
      {openProfilePopup && <UpdateProfile open={openProfilePopup} setOpen={setOpenProfilePopup} user_info={user_info} />}
      {openChangePassPopup && <UpdatePassword open={openChangePassPopup} setOpen={setOpenChangePassPopup} />}
    </>
  )
}

export default UserInfo