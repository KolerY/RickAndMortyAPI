import { configureStore } from "@reduxjs/toolkit";
import abonnesSlice from "./abonnesSlice";

const store = configureStore({
    reducer: {
        abonnes: abonnesSlice,
    },
});

export default store