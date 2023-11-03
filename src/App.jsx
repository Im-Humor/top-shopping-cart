import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { HeaderBar, FooterBar } from "./components/navbars";
import CartMenu from "./components/cart";

const App = () => {
	const [cartItems, setCartItems] = useState(() => {
		if (!localStorage.cartItems) {
			localStorage.cartItems = JSON.stringify([]);
		} else {
			return JSON.parse(localStorage.cartItems);
		}
	});
	const [cartDisp, setCartDisp] = useState(false);

	return (
		<div className="app-container">
			<HeaderBar
				cartDisp={cartDisp}
				setCartDisp={setCartDisp}
				cartItems={cartItems}
			/>
			<Outlet context={[cartItems, setCartItems]} />
			<CartMenu cartDisp={cartDisp} cartItems={cartItems} />
			<FooterBar />
		</div>
	);
};

export default App;
