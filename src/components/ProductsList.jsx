import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Products from "./Products";
import VideoPlayer from "./VideoPlayer";

const ProductsList = () => {
	const { products } = useContext(DataContext);
	return (
		<div>
			<VideoPlayer src='https://www.apple.com/105/media/ww/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/large.mp4' />
			<Products items={products} />
		</div>
	);
};

export default ProductsList;
