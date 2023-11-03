import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/home.jsx";
import Store from "./components/store.jsx";
import "./index.css";
import ListingPage from "./components/listingpage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, path: "/", element: <Home /> },
			{ path: "store", element: <Store /> },
			{ path: "listing/:item_sku", element: <ListingPage /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
