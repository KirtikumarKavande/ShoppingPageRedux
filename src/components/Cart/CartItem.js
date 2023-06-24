import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { addItemToCartAction, removeItemFromCart } from "../Store/CartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>${total.toFixed(2)} </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(removeItemFromCart({ id, quantity }));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(
                addItemToCartAction({
                  id: id,
                  price: (price / quantity).toFixed(2),
                })
              );
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
