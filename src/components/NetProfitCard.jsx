import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const NetProfitCard = () => {
	return (
		<div className="bg-cardDark p-4 rounded-lg flex items-center justify-between">
			<div>
				<h3 className="text-sm text-gray-400">Net Profit</h3>
				<p className="text-2xl font-bold">$6759.25</p>
			</div>
			<div className="w-16 h-16">
				<CircularProgressbar
					value={70}
					text="70%"
					styles={{
						path: {
							stroke: "#3B82F6",
							strokeWidth: 5,
						},
						trail: {
							stroke: "#1E293B",
						},
						text: {
							fill: "#3B82F6",
							fontSize: "16px",
						},
					}}
				/>
			</div>
		</div>
	);
};

export default NetProfitCard;
