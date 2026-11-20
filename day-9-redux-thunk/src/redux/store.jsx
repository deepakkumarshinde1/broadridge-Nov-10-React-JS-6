import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counter.slice";
import ProductSlice from "./slices/product.slice";

let store = configureStore({
  reducer: {
    counterReducer: CounterSlice.reducer,
    productReducer: ProductSlice.reducer,
  },
});

export default store;
