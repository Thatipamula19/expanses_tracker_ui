import emailIcon from "@/assets/authIcons/email.svg";
import lockIcon from "@/assets/authIcons/lock.svg";
import eyeOpenIcon from "@/assets/authIcons/eye_open.svg";
import eyeCloseIcon from "@/assets/authIcons/eye_close.svg";
import notificationIcon from "@/assets/header/notification.svg";
import notificationHoverHoverIcon from "@/assets/header/notification_hover.svg";
import userIcon from "@/assets/header/user.svg";
import userHoverIcon from "@/assets/header/user_hover.svg";

import logoLight from "@/assets/logos/logo_light.svg";
import logoPrimary from "@/assets/logos/logo_primary.svg";
import logoSecondary from "@/assets/logos/logo_secondary.svg";

const AppConstants = Object.freeze({
	icons: {
		email: emailIcon,
		lock: lockIcon,
		eyeOpen: eyeOpenIcon,
		eyeClose: eyeCloseIcon,
		notification: notificationIcon,
		notificationHover: notificationHoverHoverIcon,
		user: userIcon,
		userHover: userHoverIcon,
	},
	logos: {
		light: logoLight,
		primary: logoPrimary,
		secondary: logoSecondary,
	},
});

export default AppConstants;

export type AppConstants = typeof AppConstants;
