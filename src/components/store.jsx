import items from "../data";

const StoreItem = ({ name, price, desc }) => {
	return (
		<div className="store-item">
			<p>Name: {name}</p>
			<p>Price: {price}</p>
			<p>Description: {desc}</p>
		</div>
	);
};

const StoreList = () => {
	return <ul></ul>;
};

const Store = () => {
	return (
		<div className="store">
			<h3>Storefront store</h3>
			<p>This is the storefront store</p>
		</div>
	);
};

export default Store;
