import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const ActivityChart = () => {
	const data = {
		labels: Array.from({ length: 12 }, (_, i) => `Day ${i + 1}`),
		datasets: [
			{
				label: "Activity",
				data: Array.from({ length: 12 }, () => Math.random() * 15000),
				backgroundColor: "#3B82F6",
			},
		],
	};

	const options = {
		plugins: { legend: { display: false } },
		scales: {
			x: { ticks: { color: "#A3A3A3" } },
			y: { ticks: { color: "#A3A3A3" } },
		},
	};

	return (
		<div className="bg-cardDark p-4 rounded-lg relative">
			<h3 className="text-lg font-semibold mb-4">Activity</h3>
			<select className="absolute top-4 right-4 bg-darkGray text-gray-300 px-4 py-2 rounded-md">
				<option value="weekly">Weekly</option>
				<option value="monthly">Monthly</option>
			</select>
			<Bar data={data} options={options} />
		</div>
	);
};

export default ActivityChart;
