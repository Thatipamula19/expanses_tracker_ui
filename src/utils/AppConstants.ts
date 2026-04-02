import emailIcon from "@/assets/authIcons/email.svg";
import lockIcon from "@/assets/authIcons/lock.svg";
import eyeOpenIcon from "@/assets/authIcons/eye_open.svg";
import eyeCloseIcon from "@/assets/authIcons/eye_close.svg";

const AppConstants = Object.freeze({
	icons: {
		email: emailIcon,
		lock: lockIcon,
		eyeOpen: eyeOpenIcon,
		eyeClose: eyeCloseIcon,
	},
});

export default AppConstants;

export type AppConstants = typeof AppConstants;
