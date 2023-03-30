import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Details } from "../../../interface/index";
import axios from "axios";
import { RootState } from "../../store";

//AQUI INTERFACE DESPUES VEMOS SI LA CAMBIAMOS A OTRA CARPETA
export interface ProductState {
  products: Details[];
  productDetails: Details | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// INICIAMOS EL ESTADO
const initialState: ProductState = {
  products: [],
  productDetails: null,
  status: "idle",
  error: null,
};

//ACTIONS ASINCRONICA PARA TRAER TODOS LOS PRODUCTOS
export const fetchProductList = createAsyncThunk(
  "products/fetchingProducts",
  async (url: string) => {
    const response = await axios(url);
    const data = response.data;
    return data;
  }
);
//ACTIONS ASINCRONICA PARA TRAER UN PRODUCTO POR ID
export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

//slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetails = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      })
      .addCase(fetchProductList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});
export const selectProductDetails = (state: RootState) =>
  state.product.productDetails;
export const selectProductList = (state: RootState) => state.product.products;
export const selectProductStatus = (state: RootState) => state.product.status;
export const selectProductError = (state: RootState) => state.product.error;
export default productSlice.reducer;
