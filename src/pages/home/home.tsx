import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { productList } from "../../redux/slices/products";
import Product from "../../components/product/product";
import { ProductState } from "../../interface";
import Search from "../../components/search/search";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, isLoading, error } = useSelector<RootState, ProductState>(
    (state) => state.product
  );
  useEffect(() => {
    if (products.length === 0) {
      dispatch(productList());
    }

    //localStorage.setItem("productis", JSON.stringify(producis));
  }, [dispatch, products]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Home</h1>
      <Search />
      {error && <div>{error}</div>}
      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {products.map((product) => (
          <Product
            key={product._id}
            _id={product._id}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
