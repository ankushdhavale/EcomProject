	
import React, { useContext } from "react";
import { FaAmazon, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const NavBar = () => {
	const { searchTerm, setSearchTerm, inputHandelar } = useContext(
		SearchContext
	);

	return (
		<>
			<div className='bg-black px-4 py-2 sticky'>
				<div className='flex gap-4'>
					<Link to='/' className='flex items-center'>
						<FaAmazon className='text-yellow-200 me-2 text-xl' />
						<span className=' text-xl font-semibold text-white'>Amazon</span>
					</Link>
					<form className='mx-auto flex ' onSubmit={inputHandelar}>
						<input
							type='search'
							className=' search-input text-black'
							placeholder='Search Products'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<button className='text-yellow-500'>
							<FaSearch />
						</button>
					</form>
					<ul className='mx-auto flex gap-3'>
						{["Mobiles", "Laptops", "Tablets", "watches"].map((category) => (
							<li key={category} className='text-white'>
								<Link to={`/product/category/${category}`} className=''>
									{category}
								</Link>
							</li>
						))}
					</ul>
					<Link to='/cart'>
						<button className='text-yellow-300 text-xl mx-auto'>
							<FaShoppingCart />
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NavBar;
