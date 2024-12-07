import { FiGrid, FiMail, FiBell, FiSettings, FiLogOut } from "react-icons/fi";

const Navbar = () => {
	return (
		<div className="bg-dark p-4 flex items-center justify-between">
			<div className="flex items-center space-x-4">
				<input
					type="text"
					placeholder="Search"
					className="px-4 py-2 bg-darkGray text-gray-300 rounded-lg outline-none"
				/>
			</div>
			<div className="flex items-center space-x-4">
				<FiMail className="text-gray-500 text-2xl" />
				<FiSettings className="text-gray-500 text-2xl" />
				<FiBell className="text-gray-500 text-2xl" />
				<div className="w-8 h-8 bg-gray-600 rounded-full">
					<img
						src="https://randomuser.me/api/portraits/men/3.jpg"
						alt="Profile"
						className="w-8 h-8 rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
