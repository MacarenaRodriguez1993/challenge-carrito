import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getDetails } from "../../redux/slices/products/index";
const Home: React.FC = () => {
  const { product } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  console.log(product.productDetails);
  const handle = (): void => {
    dispatch(
      getDetails({
        name: "NAMACAREA",
        image: "macarena",
        price: 45,
        description: "holamudno",
      })
    );
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={handle}>click</button>
    </>
  );
};

export default Home;
