import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
	return (
		<div className="flex h-screen bg-gray-950 text-white">
			<Sidebar />

			<div className="flex-1 flex flex-col overflow-auto">
				<Navbar />

				<Dashboard />
			</div>
		</div>
	);
};

export default App;
