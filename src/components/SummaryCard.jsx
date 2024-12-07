import { FiDollarSign, FiBox, FiTruck, FiXCircle } from "react-icons/fi";

const SummaryCard = ({ title, value, percentage, color, icon }) => {
	return (
		<div
			className="p-4 rounded-lg bg-cardDark flex items-center justify-between border-l-4"
			style={{ borderColor: color }}
		>
			<div>
				<div className="text-2xl text-lightBlue">{icon}</div>
				<h3 className="text-sm text-gray-400">{title}</h3>
				<p className="text-2xl font-bold">{value}</p>
			</div>
			<span
				className={`text-sm font-medium ${
					percentage.startsWith("-") ? "text-red-500" : "text-green-500"
				}`}
			>
				{percentage}
			</span>
		</div>
	);
};

const Summary = () => {
	return (
		<section className="grid grid-cols-4 gap-6 w-full">
			<SummaryCard
				title="Total Orders"
				value="75"
				percentage="3%"
				color="lightBlue"
				icon={<FiBox />}
			/>
			<SummaryCard
				title="Total Delivered"
				value="70"
				percentage="-3%"
				color="green"
				icon={<FiTruck />}
			/>
			<SummaryCard
				title="Total Cancelled"
				value="5"
				percentage="3%"
				color="red"
				icon={<FiXCircle />}
			/>
			<SummaryCard
				title="Total Revenue"
				value="$12k"
				percentage="-3%"
				color="yellow"
				icon={<FiDollarSign />}
			/>
		</section>
	);
};

export default Summary;
