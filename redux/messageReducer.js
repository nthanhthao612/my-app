import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import messageApi from "../api/message-api";
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

export const getAllMessages = createAsyncThunk(
  "product/getProducts",
  async (params, thunkAPI) => {
    const temp = false;
    if (temp == true) {
      const listMessages = await messageApi.getAll();
      const value = {
        ...(await getData("messages")),
        listMessages: listMessages,
      };
      await storeData("messages", JSON.stringify(value));
      return listMessages;
    } else {
      const { listMessages } = await getData("messages");
      return listMessages;
    }
  }
);

const messageReducer = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllMessages.pending]: (state) => {
      state.loading = true;
    },
    [getAllMessages.rejected]: (state) => {
      state.loading = false;
    },
    [getAllMessages.fulfilled]: (state, action) => {
      state.loading = false;
      state.messagesList = action.payload;
    },
  },
});

export default messageReducer.reducer;
