import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counter.slice";

let store = configureStore({
  reducer: {
    counterReducer: CounterSlice.reducer,
  },
});

export default store;
