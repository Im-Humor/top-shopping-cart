import { Outlet } from "react-router-dom";
import "./App.css";
import { HeaderBar, FooterBar } from "./components/navbars";

const App = () => {
	return (
		<div className="app-container">
			<HeaderBar />
			<Outlet />
			<FooterBar />
		</div>
	);
};

export default App;
