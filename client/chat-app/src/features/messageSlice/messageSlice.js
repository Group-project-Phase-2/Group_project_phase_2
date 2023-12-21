import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      // state.list = action.payload
      state.list = [...state.list, action.payload];
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
