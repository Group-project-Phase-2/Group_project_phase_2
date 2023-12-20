import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./features/messageSlice/messageSlice";

export const store = configureStore({
    reducer: {
        message: messageSlice
    }
})