import { configureStore } from "@reduxjs/toolkit";
import { Cartslice } from "./slices/Slice";
import CartReducer from "./slices/Slice"


export const store = configureStore({
    reducer:{
        cart :CartReducer
    }
});