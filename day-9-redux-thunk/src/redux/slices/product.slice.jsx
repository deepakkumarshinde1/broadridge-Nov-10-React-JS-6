import { createSlice } from "@reduxjs/toolkit";
import { getProductList, getSingleProduct } from "../services/products.service";

function extraReducerHandler(
  builder,
  actionCreator,
  pendingCallback,
  successCallback,
  rejectedCallback,
) {
  builder
    .addCase(actionCreator.pending, pendingCallback)
    .addCase(actionCreator.fulfilled, successCallback)
    .addCase(actionCreator.rejected, rejectedCallback);
}

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    singleProduct: null,
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    extraReducerHandler(
      builder,
      getProductList,
      (state) => {
        state.isLoading = true;
        state.error = null;
      },
      (state, action) => {
        let { data } = action.payload;
        state.products = data;
        state.isLoading = false;
      },
      (state, action) => {
        let { message } = action.payload;
        state.error = message;
        state.isLoading = false;
      },
    );

    extraReducerHandler(
      builder,
      getSingleProduct,
      (state, action) => {
        state.isLoading = true;
        state.singleProduct = null;
        state.error = null;
      },
      (state, action) => {
        state.isLoading = false;
        state.singleProduct = action.payload.data;
      },
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      },
    );
  },
});

export default ProductSlice;
