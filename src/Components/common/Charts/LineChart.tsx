import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const 	DynamicLineChart = ({ data, chartKeys }: { data: any[]; chartKeys: any }) => {
	return (
		<>
			<LineChart style={{ width: "100%", maxWidth: "600px", maxHeight: "300px", aspectRatio: 1.618 }} data={data}>
				<CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#EBEBEB" />
				<XAxis dataKey={chartKeys?.x_axis} padding={{ left: 30, right: 30 }} stroke="#CCCCCC" />
				<YAxis
					width={60}
					stroke="#CCCCCC"
					domain={[0, 28000]}
					ticks={[0, 500, 1000, 5000, 10000, 15000, 20000, 22000, 24000, 26000, 28000]}
				/>
				<Tooltip
					cursor={{ stroke: "#64748B" }}
					contentStyle={{ backgroundColor: "#E2E8F0", borderColor: "#64748B" }}
					labelStyle={{ fontSize: 12 }}
					itemStyle={{ fontSize: 12 }}
				/>

				<Line
					type="monotone"
					dataKey={chartKeys?.lines?.[0]}
					// height={2}
					stroke="#3366CC"
					strokeWidth={2}
					dot={false}
					activeDot={{ r: 8, stroke: "#E2E8F0" }}
				/>
				<Line
					type="monotone"
					dataKey={chartKeys?.lines?.[1]}
					stroke="#DC3912"
					strokeWidth={2}
					dot={false}
					activeDot={{ r: 8, stroke: "#E2E8F0" }}
				/>
				<Legend verticalAlign="bottom" height={36} iconType="line" wrapperStyle={{ fontSize: "12px", marginTop: "10px" }} />
			</LineChart>
		</>
	);
};

export default DynamicLineChart;
