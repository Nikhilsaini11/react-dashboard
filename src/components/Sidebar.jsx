import {
	FiGrid,
	FiHome,
	FiBarChart2,
	FiClipboard,
	FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
	return (
		<div className="w-20 bg-darkGray h-full flex flex-col items-center py-6">
			<div className="text-lightBlue text-3xl mb-6">
				<FiGrid />
			</div>
			<div className="space-y-6">
				<FiHome className="text-gray-500 text-2xl" />
				<FiBarChart2 className="text-gray-500 text-2xl" />
				<FiClipboard className="text-gray-500 text-2xl" />
			</div>
			<div className="mt-auto text-gray-500">
				<FiLogOut className="text-2xl" />
			</div>
		</div>
	);
};

export default Sidebar;
