import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products/index";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import settingReducer from "./slices/settings";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shoppingCart", "products"],
  expires: 1 * 60 * 60 * 1000,
};
const persistSettingConfig = {
  key: "setting",
  storage,
  whitelist: ["themeMode"],
};
const store = configureStore({
  reducer: {
    product: persistReducer(persistConfig, productReducer),
    setting: persistReducer(persistSettingConfig, settingReducer),
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {product: ProductState}
export type AppDispatch = typeof store.dispatch;

export default store;
