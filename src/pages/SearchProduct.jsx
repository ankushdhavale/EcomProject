import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { items } from "../context/dataDb";
import Products from "../components/Products";
const SearchProduct = () => {
	const { term } = useParams();
	console.log(term);

	const navigate = useNavigate();

	const searchFilter = items.filter((item) =>
		item.title.toLowerCase().includes(term.toLowerCase())
	);

	return (
		<div>
			<Products items={searchFilter} />
		</div>
	);
};

export default SearchProduct;
