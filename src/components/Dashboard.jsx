import Summary from "./SummaryCard";
import NetProfitCard from "./NetProfitCard";
import ActivityChart from "./ActivityChart";
import GoalsSection from "./GoalsSection";
import CustomerFeedback from "./CustomerFeedback";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
	return (
		<div className="p-6 space-y-6">
			<h1 className="text-xl font-semibold">Dashboard</h1>
			<div className="flex gap-6 ">
				<div className="w-7/10 h-full">
					<Summary />
				</div>
				<div className="w-3/10 h-full">
					<NetProfitCard />
				</div>
			</div>

			<div className="flex gap-6">
				<div className="w-7/10 h-full">
					<ActivityChart />
				</div>
				<div className="w-3/10 h-full">
					<GoalsSection />
				</div>
			</div>

			<div className="flex gap-6">
				<div className="w-7/10 h-full">
					<RecentOrders />
				</div>
				<div className="w-3/10 h-full">
					<CustomerFeedback />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
