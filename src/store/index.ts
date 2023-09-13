import { configureStore } from "@reduxjs/toolkit";
import bookListSlice from "./bookListSlice";


const store = configureStore({
    reducer: {
        bookListSlice,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;