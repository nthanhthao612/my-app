import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PromotionApi from "../api/promotion-api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {};

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : {};
  } catch (e) {
    console.log(e);
  }
};

export const getPromotions = createAsyncThunk(
  "promotion/getPromotions",
  async (params, thunkAPI) => {
    const temp = false;
    if (temp == true) {
      const listPromotions = await PromotionApi.getAll();
      const value = {
        ...(await getData("promotions")),
        listPromotions: listPromotions,
      };
      await storeData("promotions", JSON.stringify(value));
      return listPromotions;
    } else {
      const { listPromotions } = await getData("promotions");
      return listPromotions;
    }
  }
);

const promotionReducer = createSlice({
  name: "promotion",
  initialState,
  reducers: {
    addProduct: (state) => {
      console.log("addbutton");
    },
  },
  extraReducers: {
    [getPromotions.pending]: (state) => {
      state.loading = true;
    },
    [getPromotions.rejected]: (state) => {
      state.loading = false;
    },
    [getPromotions.fulfilled]: (state, action) => {
      state.loading = false;
      state.promotionsList = action.payload;
    },
  },
});

export const { addProduct, removeProduct } = promotionReducer.actions;

export default promotionReducer.reducer;
