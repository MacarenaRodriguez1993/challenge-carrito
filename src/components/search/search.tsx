import { ChangeEvent, useState } from "react";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { filterProductsByName } from "../../redux/slices/products";

const Search: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    dispatch(filterProductsByName(e.target.value));
  };
  return (
    <>
      <input
        type="text"
        placeholder="buscar por marca o modelo"
        value={searchTerm}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default Search;
