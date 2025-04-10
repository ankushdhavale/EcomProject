import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../context/dataDb";
import { trendingProducts } from "../context/dataDb";
import Products from "../components/Products";
const ProductDetails = () => {
	const { id } = useParams();
	const products = trendingProducts;
	console.log(products);

	const product = items.find((item) => item.id == id);
	const { imgSrc, description, title, price, category } = product;

	const relatedProduct = items.filter(
		(item) => item.category.toLowerCase() === product.category.toLowerCase()
	);

	return (
		<div className='mt-20 flex flex-col items-center'>
			<div className='w-[500px] flex flex-col md:flex-row rounded lg:flex-row gap-6 border p-4 items-center justify-center '>
				<img className='w-56' src={imgSrc} alt={imgSrc} />
				<div>
					<h1 className="text-2xl font-semibold">{title}</h1>
					<p className="mt-1 mb-1">₹ {price}</p>
					<p>{description}</p>
				</div>
			</div>
			<div>
				<h1>Related Products</h1>
				<div>
					<Products items={relatedProduct} />
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
