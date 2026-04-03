import { useState } from "react";
import classes from "./hoverBtn.module.css";

const HoverBtn = ({ img, imgHover, clickHandler }: { img: string; imgHover: string; clickHandler: () => void }) => {
	const [hover, setHover] = useState(false);
	return (
		<button
			className={classes?.hover_btn}
			onClick={clickHandler}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			<img src={hover ? imgHover : img} alt="icon" className={classes?.hover_btn_img} />
		</button>
	);
};

export default HoverBtn;
