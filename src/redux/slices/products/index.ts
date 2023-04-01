import {
  createSlice,
  PayloadAction,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { Details, ProductState } from "../../../interface/index";
import axios, { AxiosResponse, AxiosError } from "axios";
import { RootState } from "../../store";

// INICIAMOS EL ESTADO
const initialState: ProductState = {
  products: [],
  auxiliarProducst: [],
  productDetails: null,
  shoppingCart: 0,
  isLoading: false,
  error: "",
};

//ACTIONS PARA TRAER TODOS LOS PRODUCTOS
export const productList =
  (): ThunkAction<Promise<unknown>, RootState, unknown, Action<unknown>> =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.get(
        "http://localhost:3001/products"
      );
      dispatch(getProducts(response.data));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
//ACTION PARA TRAER DATOS POR SU ID
export const detailsProduct =
  (
    _id: string
  ): ThunkAction<Promise<unknown>, RootState, unknown, Action<unknown>> =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.get(
        `http://localhost:3001/products/${_id}`
      );
      dispatch(productById(response.data));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
//ACTION PARA FILTRAR PRODUCTOS POR NOMBRE
export const filterProductsByName =
  (searchTerm: string): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    const { products, auxiliarProducst } = getState().product;
    const productFiltrados = auxiliarProducst;
    if (searchTerm === "") {
      dispatch(searchProduct(productFiltrados));
      dispatch(setError(""));
    } else {
      const filteredProducts = products.filter((product: Details) =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredProducts.length === 0) {
        dispatch(setError(`${searchTerm} Not Found `));
      }
      dispatch(searchProduct(filteredProducts));
    }
  };

//slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Details[]>) => {
      state.products = action.payload;
      state.auxiliarProducst = action.payload;
    },
    productById: (state, action: PayloadAction<Details>) => {
      state.productDetails = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    addShopping: (state) => {
      state.shoppingCart += 1;
    },
    searchProduct: (state, action: PayloadAction<Details[]>) => {
      state.products = action.payload;
    },
  },
});
export const {
  getProducts,
  productById,
  setIsLoading,
  setError,
  addShopping,
  searchProduct,
} = productSlice.actions;
export default productSlice.reducer;
