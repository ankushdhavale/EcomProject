import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const cartHandelUpdate = (item) => {
		setCart((cart) => [item, ...cart]);
		toast.success("Data are added in Cart");
	};

	return (
		<CartContext.Provider value={{ cart, setCart, cartHandelUpdate }}>
			{children}
		</CartContext.Provider>
	);
}
