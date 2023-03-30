import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductById } from "../../redux/slices/products";
import { useParams } from "react-router-dom";
const Details: React.FC = () => {
  const { _id } = useParams<{ _id: string }>();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const url = `http://localhost:3001/products/${_id}`;
    dispatch(fetchProductById(url));
  }, [dispatch, _id]);
  const product = useSelector(
    (state: RootState) => state.product.productDetails
  );
  const loading = useSelector((state: RootState) => state.product.status);
  const error = useSelector((state: RootState) => state.product.error);

  if (loading === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return null;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8em",
        }}
      >
        <img
          src={product.img}
          width="400px"
          height="400px"
          style={{ border: "2px solid #000" }}
          alt={product.name}
        />
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
