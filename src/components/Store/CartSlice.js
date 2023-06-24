import { uiActions } from "./notificationSlice";

const { createSlice } = require("@reduxjs/toolkit");

const cartIntialState = { isShow: false, cartItems: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState: cartIntialState,
  reducers: {
    toggleStore(state) {
      state.isShow = !state.isShow;
    },
    addItemToCart(state, action) {
      let existingObj = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingObj) {
        state.cartItems.push(action.payload);
      } else {
        existingObj.quantity++;
      }
    },
    fetchDataFromDB(state, action) {
      state.cartItems = action.payload;
    },
    removeItemFromCart(state, action) {
      if (action.payload.quantity === 1) {
        const updatedArray = state.cartItems.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.cartItems = [...updatedArray];
      } else {
        let existingObj = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
        existingObj.quantity--;
      }
    },
  },
});
export const { fetchDataFromDB } = cartSlice.actions;
export const { removeItemFromCart } = cartSlice.actions;
export const addItemToCartAction = cartSlice.actions.addItemToCart;
export const { toggleStore } = cartSlice.actions;
export default cartSlice.reducer;
