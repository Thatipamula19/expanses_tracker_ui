import type { StatsTypes } from "@/types/budgets";
import classes from "./stats.module.css";

const Stats = ({ statsData }: { statsData: StatsTypes[] }) => {
	return (
		<section className={classes?.stats_sec}>
			{statsData.map((item) => (
				<div className={classes?.stats_item}>
					<span className={classes?.title}>{item.title}</span>
					<strong className={classes?.value}>₹ {item.value}</strong>
					{item.desc && <p className={classes?.desc}>{item.desc}</p>}
					{item.spentValue && <p className={classes?.spent_desc}>{`-${item.spentValue}%`}</p>}
					{item.used && (
						<div className={classes?.progress_bar}>
							<div className={classes?.progress_bar_fill} style={{ width: `${item.used}%` }} />
							<span className={classes?.used_text}>{item.used}% used</span>
						</div>
					)}
				</div>
			))}
		</section>
	);
};

export default Stats;
