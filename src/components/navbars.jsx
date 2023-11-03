import { Link } from "react-router-dom";

const HeaderBar = ({ cartItems, cartDisp, setCartDisp }) => {
	return (
		<div className="header-bar">
			<h2>Storefront</h2>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="store">Store</Link>
				</li>
				<li>
					<button
						type="submit"
						onClick={() => setCartDisp(!cartDisp)}
					>
						Cart ({cartItems.length})
					</button>
				</li>
			</ul>
		</div>
	);
};

const FooterBar = () => {
	return (
		<div className="footer-bar">
			<ul>
				<li>Home</li>
				<li>Store</li>
			</ul>
			<h2>Storefront</h2>
		</div>
	);
};

export { HeaderBar, FooterBar };
