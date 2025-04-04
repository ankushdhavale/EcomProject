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
		<div>
			<img src={imgSrc} alt={imgSrc} />
			<h1>{title}</h1>
			<p>{price}</p>
			<p>{description}</p>
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
