import { Cell, Legend, Pie, PieChart, type PieLabelRenderProps, ResponsiveContainer, Tooltip } from "recharts";

const data = [
	{ name: "Food & Dining", value: 24 },
	{ name: "Transport", value: 16 },
	{ name: "Shopping", value: 20 },
	{ name: "Bills & Utilities", value: 14 },
	{ name: "Entertainment", value: 10 },
	{ name: "Savings & Investments", value: 16 },
];

const RADIAN = Math.PI / 180;
const COLORS = ["#2ecc71", "#3498db", "#f39c12", "#e74c3c", "#9b59b6", "#16a085"];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelRenderProps) => {
	if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
		return null;
	}
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const ncx = Number(cx);
	const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
	const ncy = Number(cy);
	const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor="middle"
			dominantBaseline="central"
			style={{ fontSize: "14px", fontWeight: "bold" }}>
			{`${((percent ?? 1) * 100).toFixed(0)}%`}
		</text>
	);
};

const DynamicPieChart = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<PieChart>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					labelLine={false}
					label={renderCustomizedLabel}
					outerRadius={130}
					fill="#8884d8"
					dataKey="value"
					isAnimationActive={isAnimationActive}>
					{data.map((_, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip
					cursor={{ stroke: "#64748B" }}
					contentStyle={{ backgroundColor: "#E2E8F0", borderColor: "#64748B" }}
					labelStyle={{ fontSize: 12 }}
					itemStyle={{ fontSize: 12 }}
				/>
				<Legend
					layout="vertical"
					align="right"
					verticalAlign="middle"
					iconType="circle"
					iconSize={10}
					wrapperStyle={{ fontSize: "12px" }}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default DynamicPieChart;
