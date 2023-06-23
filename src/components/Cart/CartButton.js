import { useMemo } from 'react';
import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
 const cartItems= useSelector(state=>state.cart.cartItems)
  
let quantity=0
cartItems.map((item)=>{
  quantity=quantity + item.quantity
})

  return (
    <button className={classes.button} onClick={props.onClick} >
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
