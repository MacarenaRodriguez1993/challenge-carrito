import React from "react";
import { Link } from "react-router-dom";
import { ProductState } from "../../interface";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const { shoppingCart } = useSelector<RootState, ProductState>(
    (state) => state.product
  );
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1em",
          backgroundColor: "#05053e",
          color: "#fff",
        }}
      >
        <Link to={"/"}>
          <h3>Soy header</h3>
        </Link>
        <h5>{shoppingCart}#cart</h5>
      </div>
    </>
  );
};

export default Header;
