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

export const sendCartData = (cartItemsData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    try {
      const response = await fetch(
        "https://api-call-51521-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItemsData),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      } else {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
          })
        );
      }
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const { removeItemFromCart } = cartSlice.actions;
export const addItemToCartAction = cartSlice.actions.addItemToCart;
export const { toggleStore } = cartSlice.actions;
export default cartSlice.reducer;
