import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import ShopByCategory from "./ShopByCategory";
import { CartContext } from "../context/CartContext";
import TrendingSlider from "./TrendingSlider";

const Products = ({ items }) => {
	const { pathname } = useLocation();
	const { cart, cartHandelUpdate } = useContext(CartContext);

	return (
		<>
			{pathname === "/" && <ShopByCategory />}
			<div className='my-5 flex justify-center m-auto'>
				<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-auto'>
					{items.map((item) => (
						<div key={item.id} className='flex justify-center items-center'>
							<div
								className='m-5 border rounded-lg hover:shadow-neutral-400'
								style={{ width: "18rem" }}
							>
								<Link to={`/product/${item.id}`} className='image-continer'>
									<img
										src={item.imgSrc}
										alt={item.title}
										className='m-auto p-4 w-[180px] min-w-56'
									/>
								</Link>
								<div className=' text-center'>
									<h5 className=' font-semibold text-md'>{item.title}</h5>
									<p className=''>₹ {item.price}</p>
									<div className=' rounded bg-slate-100/20 m-4 p-2 cursor-pointer'>
										<button onClick={() => cartHandelUpdate(item)}>
											🛒 Add To Cart
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Products;
