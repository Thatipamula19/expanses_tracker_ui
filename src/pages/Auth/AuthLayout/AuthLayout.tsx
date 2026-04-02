import type { ReactNode } from "react";
import classes from "./authLayout.module.css";

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<section className={classes?.auth_layout}>
			<div className={classes?.auth_layout_content}>{children}</div>
		</section>
	);
};

export default AuthLayout;
