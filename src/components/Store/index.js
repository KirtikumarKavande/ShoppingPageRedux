import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import uiSlice from "./notificationSlice";
const store=configureStore({reducer:{cart:CartSlice, ui: uiSlice.reducer}})
export default store;