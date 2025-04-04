import react from "react";
import { Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import ProductCategory from "./pages/ProductCategory";
import SearchProduct from "./pages/SearchProduct";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductsList";
import TrendingSlider from "./components/TrendingSlider";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<ProductList />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/product/:id' element={<ProductDetails />} />
				<Route
					path='/product/category/:category'
					element={<ProductCategory />}
				/>
				<Route path='/product/search/:term' element={<SearchProduct />} />
			</Routes>
		</>
	);
}

export default App;
