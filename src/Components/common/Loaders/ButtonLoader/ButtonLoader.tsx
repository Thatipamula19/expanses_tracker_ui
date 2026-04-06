import classes from "./buttonLoader.module.css";

const ButtonLoader = () => {
	return (
		<div className={classes.loader}>
			{/* <span className={classes?.spinner}></span> */}
			Loading
			<span className={classes?.dots}>
				<span>.</span>
				<span>.</span>
				<span>.</span>
			</span>
		</div>
	);
};

export default ButtonLoader;
