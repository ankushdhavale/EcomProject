import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
	const { cart } = useContext(CartContext);
	console.log(cart);

	return (
		<>
			<div className='m-auto flex justify-center mt-20'>
				{cart.length > 0 ? (
					<div className='lg:flex md:flex gap-20'>
						<div className='m-auto gap-20'>
							{cart.map(({ id, title, price, category, imgSrc }) => (
								<div key={id} className='w-52 h-56 bg-slate-100'>
									<img src={imgSrc} alt={title} />
									<h1>{title}</h1>
									<p>{price}</p>
								</div>
							))}
						</div>
						<div className='w-60 h-60 bg-red-800'></div>
					</div>
				) : (
					<div className='mt-36 flex flex-col items-center justify-center mt-50'>
						<h1 className='text-2xl m-5 font-semibold'>Cart Not Found</h1>
						<NavLink to='/'>
							<button className='py-2 px-4 rounded text-black font-semibold bg-orange-300'>
								Go To Products Page
							</button>
						</NavLink>
					</div>
				)}
			</div>
		</>
	);
};

export default Cart;
