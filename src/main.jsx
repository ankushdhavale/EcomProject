import { createRoot } from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

import { DataProvider } from "./context/DataContext.jsx";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
	<>
		<BrowserRouter>
			<CartProvider>
				<DataProvider>
					<SearchProvider>
						<ToastContainer />
						<App />
					</SearchProvider>
				</DataProvider>
			</CartProvider>
		</BrowserRouter>
	</>
);
