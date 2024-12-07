import React from "react";

const recentOrders = [
	{
		id: 1,
		customerName: "John Doe",
		profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
		orderNo: "ORD12345",
		amount: "$120.50",
		status: "Delivered",
	},
	{
		id: 2,
		customerName: "Jane Smith",
		profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
		orderNo: "ORD12346",
		amount: "$89.30",
		status: "Pending",
	},
	{
		id: 3,
		customerName: "Michael Johnson",
		profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
		orderNo: "ORD12347",
		amount: "$65.00",
		status: "Shipped",
	},
	{
		id: 4,
		customerName: "John Doe",
		profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
		orderNo: "ORD12345",
		amount: "$120.50",
		status: "Delivered",
	},
	{
		id: 5,
		customerName: "Jane Smith",
		profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
		orderNo: "ORD12346",
		amount: "$89.30",
		status: "Pending",
	},
	{
		id: 6,
		customerName: "Michael Johnson",
		profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
		orderNo: "ORD12347",
		amount: "$65.00",
		status: "Shipped",
	},
	{
		id: 7,
		customerName: "John Doe",
		profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
		orderNo: "ORD12345",
		amount: "$120.50",
		status: "Delivered",
	},
];

const RecentOrders = () => {
	return (
		<div className="bg-cardDark p-6 rounded-lg">
			<h3 className="text-lg font-semibold text-white mb-4">Recent Orders</h3>
			<table className="min-w-full table-auto text-sm text-gray-400">
				<thead>
					<tr>
						<th className="px-4 py-2 text-left">Customer</th>
						<th className="px-4 py-2 text-left">Order No.</th>
						<th className="px-4 py-2 text-left">Amount</th>
						<th className="px-4 py-2 text-left">Status</th>
					</tr>
				</thead>
				<tbody>
					{recentOrders.map((order) => (
						<tr
							key={order.id}
							className="border-b border-gray-700 hover:bg-gray-700"
						>
							<td className="px-4 py-2 flex items-center space-x-2">
								<img
									src={order.profilePic}
									alt={order.customerName}
									className="w-8 h-8 rounded-full"
								/>
								<span>{order.customerName}</span>
							</td>
							<td className="px-4 py-2">{order.orderNo}</td>
							<td className="px-4 py-2">{order.amount}</td>
							<td className="px-4 py-2">
								<span
									className={`px-3 py-1 rounded-full ${
										order.status === "Delivered"
											? "bg-green-500"
											: order.status === "Pending"
											? "bg-yellow-500"
											: "bg-blue-500"
									}`}
								>
									{order.status}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default RecentOrders;
