import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductList = createAsyncThunk(
  "ProductSlice/getProductList",
  async () => {
    try {
      let url = `https://fakestoreapi.com/products`;
      let response = await axios.get(url);
      return { status: true, data: response.data };
    } catch (error) {
      return {
        status: false,
        message: error.message,
      };
    }
  },
);

export const getSingleProduct = createAsyncThunk(
  "ProductSlice/getSingleProduct",
  async (id) => {
    try {
      let url = `https://fakestoreapi.com/products/${id}`;
      let response = await axios.get(url);
      return { status: true, data: response.data };
    } catch (error) {
      return {
        status: false,
        message: error.message,
      };
    }
  },
);

// let a = 'Deepak' * 'Shinde'; // NaN => Not a number
