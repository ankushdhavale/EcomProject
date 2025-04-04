import { createContext, useState } from "react";
import { items } from "./dataDb";

export const DataContext = createContext();

export function DataProvider({ children }) {
	const [products, setProducts] = useState(items);
	const [cart, setCart] = useState([]);
	return (
		<DataContext.Provider value={{ products, setProducts, cart, setCart }}>
			{children}
		</DataContext.Provider>
	);
}
