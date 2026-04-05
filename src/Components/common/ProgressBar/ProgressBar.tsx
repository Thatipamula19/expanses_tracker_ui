import classes from "./progressBar.module.css";
const ProgressBar = ({ filled }: { filled: number }) => {
	const displayPercent = Math.round(filled);
	const barWidth = Math.min(filled, 100);

	return (
		<div className={classes?.progress_bar}>
			<div
				className={`${classes?.progress_bar_fill} ${barWidth >= 100 ? classes?.danger : barWidth >= 50 ? classes?.warning : ""}`}
				style={{ width: `${barWidth}%` }}
			/>
			<span className={`${classes?.used_text} ${barWidth >= 90 ? classes?.white_text : ""}`}>{displayPercent}% used</span>
		</div>
	);
};

export default ProgressBar;
