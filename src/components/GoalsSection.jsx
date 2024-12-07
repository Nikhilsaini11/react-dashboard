import { FiArrowRight } from "react-icons/fi";
import { FaBullseye, FaUtensils, FaListAlt } from "react-icons/fa";

const GoalsSection = () => {
	return (
		<div className="bg-cardDark p-6 rounded-lg space-y-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<FaBullseye className="text-xl text-gray-400" />
					<div>
						<h4 className="text-sm text-gray-400">Goals</h4>
						<p className="text-lg font-medium text-white">Achieve 80% Target</p>
					</div>
				</div>
				<FiArrowRight className="text-gray-400 text-lg" />
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<FaUtensils className="text-xl text-gray-400" />
					<div>
						<h4 className="text-sm text-gray-400">Popular Dishes</h4>
						<p className="text-lg font-medium text-white">
							Pasta, Pizza, Salad
						</p>
					</div>
				</div>
				<FiArrowRight className="text-gray-400 text-lg" />
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<FaListAlt className="text-xl text-gray-400" />
					<div>
						<h4 className="text-sm text-gray-400">Menus</h4>
						<p className="text-lg font-medium text-white">
							Lunch, Dinner, Snacks
						</p>
					</div>
				</div>
				<FiArrowRight className="text-gray-400 text-lg" />
			</div>
		</div>
	);
};

export default GoalsSection;
