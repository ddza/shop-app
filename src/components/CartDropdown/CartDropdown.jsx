
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";

import './CartDropdown.style.scss';



const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  
  return (
    <div className="cart-dropdown-container shadow-xl">
      {cartItems.length 
      ? (
          <div className="cart-items">
            <div className="flex-1 ">
                <ul className=" divide-y divide-gray-200">
                    {cartItems.map((product) => (
                      <CartItem key={product.id} {...product} />
                    ))}
                </ul>
            </div>
            <Link to="/shop" className="ml-8 items-center justify-center px-4 py-2 rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Shop
            </Link>
        </div>
      ) : (<p className="text-base text-center">Your shopping cart is empty</p>)}
    
    </div>
  );
}

export default CartDropdown;