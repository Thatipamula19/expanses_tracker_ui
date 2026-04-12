import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const WrappedTick = (props: any) => {
	const { x, y, payload } = props;
	const words = payload.value.split(" ");
	const lines = [];
	let currentLine = "";

	words.forEach((word: string) => {
		if ((currentLine + word).length > 10) {
			lines.push(currentLine.trim());
			currentLine = word + " ";
		} else {
			currentLine += word + " ";
		}
	});
	lines.push(currentLine.trim());

	return (
		<g transform={`translate(${x},${y})`}>
			<text x={0} y={0} dy={16} textAnchor="middle" fill="#64748b" fontSize={10}>
				{lines.map((line, index) => (
					<tspan x={0} dy={index === 0 ? 0 : 12} key={index}>
						{line}
					</tspan>
				))}
			</text>
		</g>
	);
};

// #endregion
const SimpleBarChart = ({ data }: { data: any[] }) => {
	return (
		<ResponsiveContainer width="100%" height={350}>
			<BarChart
				data={data || []}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 80,
				}}
				barGap={8}>
				<CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#EBEBEB" />
				<XAxis
					dataKey="category_name"
					axisLine={{ stroke: "#64748b" }}
					tickLine={false}
					tick={<WrappedTick />}
					interval={0}
				/>
				<YAxis
					axisLine={false}
					tickLine={false}
					tick={{ fill: "#64748b", fontSize: 12 }}
					domain={[0, 200000]}
					ticks={[0, 500, 1000, 50000, 100000, 150000, 200000]}
				/>
				<Tooltip
					cursor={{ fill: "transparent" }}
					contentStyle={{ backgroundColor: "#E2E8F0", borderColor: "#64748B", fontSize: "12px" }}
				/>
				<Legend
					verticalAlign="bottom"
					iconType="square"
					iconSize={14}
					wrapperStyle={{ fontSize: "12px", color: "#64748b", marginTop: 20 }}
				/>
				<Bar dataKey="amount" name="Amount" fill="#00b894" radius={[2, 2, 0, 0]} barSize={25} />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default SimpleBarChart;
