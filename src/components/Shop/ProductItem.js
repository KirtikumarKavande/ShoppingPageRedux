import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addItemToCartAction } from "../Store/CartSlice";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const itemsAddedtoCart = useSelector((state) => state.cart.cartItems);
  console.log(itemsAddedtoCart);

  const handleAddtoCart = () => {

   

    dispatch(addItemToCartAction({...props,quantity:1}))
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddtoCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
