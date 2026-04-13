import classes from "./userProfile.module.css"
import ProfileSettings from './ProfileSettings/ProfileSettings'
import UserInfo from './UserInfo/UserInfo'
import Header from "@/Components/common/Header/Header"
import Footer from "@/Components/common/Footer/Footer"
import { toast } from "react-toastify"
import { getUserInfo } from "@/services/userServices"
import { useQuery } from "@tanstack/react-query"

const UserProfile = () => {
  const { data, error } = useQuery({
    queryKey: ["user-info"],
    queryFn: async () => {
      const data = await getUserInfo();

      if (error) {
        toast.error(data?.error);
      }

      return data;
    },
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <Header />
      <div className={`${classes?.user_profile_sec}`}>
        <div className={`${classes?.user_profile_container}`}>
          <UserInfo user_info={data} />
          <ProfileSettings />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserProfile