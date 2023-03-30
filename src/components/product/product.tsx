import React from "react";
import { Details } from "../../interface";
import { Link } from "react-router-dom";
const Product: React.FC<Details> = ({ _id, name, price, img }) => {
  return (
    <div
      style={{
        flex: "none",
        width: "23.5%",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5em",
      }}
    >
      <Link to={`/details/${_id}`}>
        <img src={img} width="250px" height="200px" alt="" />
        <h3>{name}</h3>
        <h3>$ {price}</h3>
      </Link>
    </div>
  );
};
export default Product;
