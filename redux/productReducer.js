import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = { };
import productApi from "../api/product-api";
import { AsyncStorage } from '@react-native-async-storage/async-storage';
export const getProductsViaCategory = createAsyncThunk(
  "product/getProducts",
  async (params, thunkAPI) => {
    try {
      const data = await productApi.getProductsViaCategory(params);
      return data;
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  }
);

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductsViaCategory.pending]: (state) => {
      state.loading = true;
    },
    [getProductsViaCategory.rejected]: (state) => {
      state.loading = false;
    },
    [getProductsViaCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    },
  },
});

export default productReducer.reducer;
