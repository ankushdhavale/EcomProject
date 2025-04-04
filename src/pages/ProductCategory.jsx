import React from "react";
import { useParams } from "react-router-dom";

import { Videos } from "../context/dataDb";
import { items } from "../context/dataDb";
import VideoPlayer from "../components/VideoPlayer";
import Products from "../components/Products";

const ProductCategory = () => {
	const { category } = useParams();

	const videoByCategory = Videos.find(
		(vid) => vid?.category?.toLowerCase() === category?.toLowerCase()
	);
	const productsByCategory = items.filter(
		(item) => item?.category?.toLowerCase() === category?.toLowerCase()
	);
	return (
		<>
			<div>
				<VideoPlayer src={videoByCategory.url} />
				<Products items={productsByCategory} />
			</div>
		</>
	);
};

export default ProductCategory;
