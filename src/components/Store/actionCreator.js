import { useDispatch } from "react-redux";
import { uiActions } from "./notificationSlice";
import { fetchDataFromDB } from "./CartSlice";


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

export const FetchData = () => {
  return (dispatch) => {
    fetch("https://api-call-51521-default-rtdb.firebaseio.com/cart.json").then(
      (res) => {
        res.json().then((data) => {
          console.log(data);
          dispatch(fetchDataFromDB(data ||[]))
        });
      }
    );
  };
};
