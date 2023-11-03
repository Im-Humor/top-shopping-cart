import { Link, useOutletContext } from "react-router-dom";
import items from "../data";

const StoreItem = ({ name, price, desc, item_sku }) => {
	return (
		<div className="store-item">
			<p>Name: {name}</p>
			<p>Price: {price}</p>
			<p>Description: {desc}</p>
			<Link to={`/listing/${item_sku}`}>Listing</Link>
		</div>
	);
};

const StoreList = () => {
	return (
		<ul>
			{items.map((item) => {
				return (
					<StoreItem
						name={item.item_name}
						price={item.item_price}
						desc={item.item_desc}
						item_sku={item.item_sku}
					/>
				);
			})}
		</ul>
	);
};

const Store = () => {
	const [cartItems, setCartItems] = useOutletContext();
	return (
		<div className="store">
			<h3>Storefront store</h3>
			<p>This is the storefront store</p>
			<StoreList />
		</div>
	);
};

export default Store;
