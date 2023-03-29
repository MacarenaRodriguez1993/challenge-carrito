import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Details } from "../../../interface/index";
//AQUI INTERFACE DESPUES VEMOS SI LA CAMBIAMOS A OTRA CARPETA
export interface ProductState {
  products: Array<any>;
  productDetails: Details;
}

// INICIAMOS EL ESTADO
const initialState: ProductState = {
  products: [],
  productDetails: {},
};

//slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Array<any>>) => {
      state.products = action.payload;
    },
    getDetails: (state, action: PayloadAction<Details>) => {
      state.productDetails = action.payload;
    },
  },
});
export const { getDetails, getProducts } = productSlice.actions;
export default productSlice.reducer;
