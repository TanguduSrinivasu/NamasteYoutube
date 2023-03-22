import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import resultSlice from "./resultSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer : {
        app : appSlice,
        results : resultSlice,
        search : searchSlice
    }
})

export default store;