const CartMenu = ({ cartDisp, cartItems }) => {
	if (cartDisp === true) {
		return (
			<div className="cart-side-bar">
				<p>cart currently has {cartItems.length} items added</p>
				{cartItems.map((item) => {
					return <p>{item.item_name}</p>;
				})}
			</div>
		);
	}
};

export default CartMenu;
