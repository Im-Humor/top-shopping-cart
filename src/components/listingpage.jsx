import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import items from "../data";
import { useEffect } from "react";

const ListingPage = () => {
	const [cartItems, setCartItems] = useOutletContext();
	const [cartAmount, setCartAmount] = useState(1);

	const handleTextChange = (event) => {
		event.preventDefault();
		setCartAmount(event.target.value);
	};

	const handleCartAmount = () => {
		let newCartArray = [...cartItems];
		for (let x = 0; x < cartAmount; x++) {
			newCartArray.push(current_item);
		}
		setCartItems([...newCartArray]);
		localStorage.cartItems = JSON.stringify([...newCartArray]);
	};

	const { item_sku } = useParams();
	let current_item = items.find((item) => item.item_sku == item_sku);
	return (
		<div className="listing-page">
			<p>{current_item.item_name}</p>
			<input type="number" onChange={handleTextChange} />
			<button type="submit" onClick={handleCartAmount}>
				Add to cart
			</button>
		</div>
	);
};

export default ListingPage;
