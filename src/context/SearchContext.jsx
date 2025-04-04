import { createContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const inputHandelar = (event) => {
		event.preventDefault();
		navigate(`/product/search/${searchTerm}`);
		setSearchTerm("");
	};
	return (
		<SearchContext.Provider
			value={{ searchTerm, setSearchTerm, inputHandelar }}
		>
			{children}
		</SearchContext.Provider>
	);
}
