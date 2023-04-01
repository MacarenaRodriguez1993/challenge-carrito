import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useParams } from "react-router-dom";
import { addShopping, detailsProduct } from "../../redux/slices/products";
import { ProductState } from "../../interface";
const Details: React.FC = () => {
  const { _id } = useParams<{ _id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { productDetails, isLoading, error } = useSelector<
    RootState,
    ProductState
  >((state) => state.product);
  useEffect(() => {
    if (_id) {
      dispatch(detailsProduct(_id));
    }
  }, [dispatch, _id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!productDetails) {
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
          src={productDetails.img}
          width="500px"
          height="400px"
          style={{ border: "2px solid #000" }}
          alt={productDetails.name}
        />
        <div>
          <div>
            <h1>Descripcion</h1>
            <h1>{productDetails.name}</h1>
            <p>{productDetails.description}</p>
            <p>{productDetails.price}</p>
          </div>
          <div>
            <h1>actions</h1>
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <button onClick={() => dispatch(addShopping())}>
              añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
