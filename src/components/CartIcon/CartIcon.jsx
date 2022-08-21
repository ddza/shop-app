//import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { ReactComponent as ShopIcon } from '../../img/shopping-bag.svg';
//import { CartContext } from '../../contexts/CartContext';
import { selectIsCartHidden, selectQuantity } from '../../store/cart/cart.selector';
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { setIsCartHidden } from '../../store/cart/cart.action';

import './CartIcon.style.scss';

const CartIcon = () => {
    //const {isCartHidden,  setIsCartHidden, totalQuantity } = useContext(CartContext);
    const isCartHidden = useSelector(selectIsCartHidden);
    const totalQuantity = useSelector(selectQuantity);
    const dispatch = useDispatch();
    
    const toggleCartDropdown = () => dispatch(setIsCartHidden(!isCartHidden));

    return (
        <div className='cart-icon-container ml-8' onClick={toggleCartDropdown}>
            <ShopIcon className='shopping-icon' />
            <span className='item-count'>{totalQuantity}</span>
            {
                    // !isCartHidden ?  <CartDropdown/> : null
                    !isCartHidden && <CartDropdown/> 
                }
        </div>
    )
}
export default CartIcon;