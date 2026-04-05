import type { StatsTypes } from "@/types/budgets";
import classes from "./stats.module.css";
import ProgressBar from "@/Components/common/ProgressBar/ProgressBar";

const Stats = ({ statsData }: { statsData: StatsTypes[] }) => {
	return (
		<section className={classes?.stats_sec}>
			{statsData.map((item) => (
				<div className={classes?.stats_item} key={item.id}>
					<span className={classes?.title}>{item.title}</span>
					<strong className={classes?.value}>₹ {item.value}</strong>
					{item.desc && <p className={classes?.desc}>{item.desc}</p>}
					{item.spentValue && <p className={classes?.spent_desc}>{`-${item.spentValue}%`}</p>}
					{item.used && <ProgressBar filled={item.used} />}
				</div>
			))}
		</section>
	);
};

export default Stats;
