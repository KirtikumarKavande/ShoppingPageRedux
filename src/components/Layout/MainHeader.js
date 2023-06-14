import { useDispatch } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { toggleStore } from '../Store/CartSlice';

const MainHeader = (props) => {
  const dispatch=useDispatch()
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={()=>{dispatch(toggleStore())}}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
