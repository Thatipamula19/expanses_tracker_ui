import AppConstants from "@/utils/AppConstants";
import classes from "./table.module.css";

const Table = ({ data }: { data: any }) => {
	return (
		<div className={classes?.table_container}>
			<table className={classes?.table}>
				<tbody>
					{data?.latest_transactions?.map((item: any) => (
						<tr key={`transaction_${item.id}`} className={classes?.table_row}>
							<td>{new Date(item.transaction_date).toLocaleDateString('en-US',{ year: 'numeric', month: 'short', day: 'numeric' })}</td>
							<td>
								<div className={classes?.category}>
									<div className={classes?.category}>
										<div className={classes?.icon_container}>
											<img
												src={
													AppConstants?.category?.[
													item.category_icon as keyof typeof AppConstants.category
													]
												}
												alt={item.category_icon}
												className={classes?.icon}
											/>
										</div>
										<span>{item?.title}</span>
										{/* <span className={classes?.category_name}>{item.category_name}</span> */}
									</div>
								</div>
							</td>
							<td>₹{item.amount?.toLocaleString("en-IN")}</td>
							<td>
								<span
									className={`${classes?.badge} ${item.type === "expense" ? classes?.expense : classes?.income}`}>
									{item.type}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
