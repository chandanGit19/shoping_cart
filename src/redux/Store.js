import { configureStore } from "@reduxjs/toolkit";
import { Cartslice } from "./slices/Slice";


export const store = configureStore({
    reducer:{
        cart : Cartslice
    }
});