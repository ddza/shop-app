import { useContext } from 'react';

import { ReactComponent as ShopIcon } from '../../img/shopping-bag.svg';
import { CartContext } from '../../contexts/CartContext';

import './CartIcon.style.scss';

const CartIcon = () => {
    const {isCartHidden,  setIsCartHidden, totalQuantity } = useContext(CartContext);

    const toggleCartDropdown = () => setIsCartHidden(!isCartHidden);

    return (
        <div className='cart-icon-container ml-8' onClick={toggleCartDropdown}>
            <ShopIcon className='shopping-icon' />
            <span className='item-count'>{totalQuantity}</span>
        </div>
    )
}
export default CartIcon;