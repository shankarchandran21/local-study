import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../createSlice/counterSlice"
import productSlice from "../createSlice/productSlice"

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        product:productSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
