import React, { useContext, useState } from "react";
import {
	FaMobileAlt,
	FaLaptop,
	FaClock,
	FaThLarge,
	FaTabletAlt,
	FaRupeeSign,
} from "react-icons/fa";

import { DataContext } from "../context/DataContext";
import { items } from "../context/dataDb";

const categories = [
	{ name: "All Products", icons: <FaThLarge /> },
	{ name: "Mobiles", icons: <FaMobileAlt /> },
	{ name: "Laptops", icons: <FaLaptop /> },
	{ name: "Tablets", icons: <FaTabletAlt /> },
	{ name: "Watches", icons: <FaClock /> },
];

const priceRanges = [30000, 40000, 50000, 60000, 70000, 80000];

const ShopByCategory = () => {
	const { products, setProducts } = useContext(DataContext);
	const [selectedPrice, setSelectedPrice] = useState(80000);

	console.log(products);

	const filterByCategory = (category) => {
		category === "All Products"
			? setProducts(items)
			: setProducts(
					items.filter(
						(item) => item.category.toLowerCase() === category.toLowerCase()
					)
			  );
	};

	const filterByPrice = (price) => {
		setProducts(items.filter((item) => item.price <= price));
		setSelectedPrice(price);
	};

	return (
		<>
			<div className='continer my-4 p-4 rounded text-lime-50'>
				<h2 className='text-center mb-3 font-semibold'>Filter Products</h2>
				<div className='flex justify-center items-center gap-6 flex-wrap mb-4'>
					{categories.map(({ name, icons }) => (
						<div
							key={name}
							onClick={() => filterByCategory(name)}
							className='p-2 px-4 flex items-center gap-2 cursor-pointer bg-slate-800 rounded'
						>
							{icons}
							<span>{name}</span>
						</div>
					))}
				</div>
				<div className='flex flex-wrap justify-center gap-6 mt-6'>
					{priceRanges.map((value) => (
						<span
							onClick={() => filterByPrice(value)}
							key={value}
							className={`rounded text-black flex justify-center items-center gap-1 p-2 px-4 cursor-pointer ${
								selectedPrice === value ? "bg-yellow-500" : "bg-slate-200"
							}`}
						>
							<FaRupeeSign />
							{value}
						</span>
					))}
				</div>
			</div>
		</>
	);
};

export default ShopByCategory;
