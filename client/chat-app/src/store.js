import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./features/ChatSlice";

export const store = configureStore({
  reducer: {
    chat: chatSlice,
  },
});
