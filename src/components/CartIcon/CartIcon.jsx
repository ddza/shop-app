import { useContext } from 'react';

import { ReactComponent as ShopIcon } from '../../img/shopping-bag.svg';
import { CartContext } from '../../contexts/CartContext';
import CartDropdown from "../../components/CartDropdown/CartDropdown";

import './CartIcon.style.scss';

const CartIcon = () => {
    const {isCartHidden,  setIsCartHidden, totalQuantity } = useContext(CartContext);

    const toggleCartDropdown = () => setIsCartHidden(!isCartHidden);

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