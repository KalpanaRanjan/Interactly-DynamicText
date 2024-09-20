import { configureStore } from "@reduxjs/toolkit";
import textBoxReducer from '../features/textadd/textaddSlice';

export const store = configureStore({
    reducer: textBoxReducer
})