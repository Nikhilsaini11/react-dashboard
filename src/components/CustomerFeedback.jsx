import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const customerFeedbackData = [
	{
		id: 1,
		name: "John Doe",
		profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
		rating: 4,
		feedback: "Great experience! Fast delivery and excellent service.",
	},
	{
		id: 2,
		name: "Jane Smith",
		profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
		rating: 5,
		feedback: "Amazing quality, great experience will definitely buy again!",
	},
	{
		id: 3,
		name: "Michael Johnson",
		profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
		rating: 3,
		feedback: "Good service, but delivery was delayed.",
	},
];

const CustomerFeedback = () => {
	const renderStars = (rating) => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			if (i < rating) {
				stars.push(<FaStar key={i} className="text-yellow-500" />);
			} else if (i < rating + 0.5) {
				stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
			} else {
				stars.push(<FaRegStar key={i} className="text-gray-400" />);
			}
		}
		return stars;
	};

	return (
		<div className="bg-cardDark p-6 rounded-lg">
			<h3 className="text-lg font-semibold text-white mb-4">
				Customer Feedback
			</h3>
			{customerFeedbackData.map((feedback) => (
				<div
					key={feedback.id}
					className="border-b border-gray-700 pb-4 mb-4 last:mb-0"
				>
					<div className="flex items-center space-x-4">
						<img
							src={feedback.profilePic}
							alt={feedback.name}
							className="w-12 h-12 rounded-full"
						/>
						<div>
							<h4 className="text-white font-semibold">{feedback.name}</h4>
							<div className="flex items-center space-x-1">
								{renderStars(feedback.rating)}
							</div>
						</div>
					</div>
					<p className="text-gray-400 mt-2">{feedback.feedback}</p>
				</div>
			))}
		</div>
	);
};

export default CustomerFeedback;
