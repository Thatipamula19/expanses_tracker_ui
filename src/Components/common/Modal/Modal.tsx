import { useEffect } from "react";
import classes from "./modal.module.css";

const Modal = ({ children, setOpen }: { children: React.ReactNode; setOpen: (open: boolean) => void }) => {

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setOpen(false);
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [setOpen]);

	return (
		<div className={classes?.modal_overlay} role="dialog">
			<div className={classes?.modal_content} role="document">
				{children}
			</div>
		</div>
	);
};

export default Modal;
