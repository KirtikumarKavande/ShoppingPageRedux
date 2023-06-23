import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartStatus = useSelector((state) => state.cart.isShow);
  const itemsAddedInCart = useSelector((state) => state.cart.cartItems);
  return (
    <>
      {cartStatus && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {itemsAddedInCart.map((newItem) => (
              <CartItem
                item={{ title: newItem.title, quantity: newItem.quantity, total: newItem.quantity*newItem.price,id:newItem.id  }}
              />
            ))}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
