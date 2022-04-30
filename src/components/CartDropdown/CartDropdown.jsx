
import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";

import './CartDropdown.style.js';
import { 
  DropdownContainer, 
  CartItems, 
  LinkToShop, 
  EmptyMessage
 } from "./CartDropdown.style.js";


const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  
  return (
    <DropdownContainer className="shadow-xl">
      {cartItems.length 
      ? (
          <CartItems>
            <div className="flex-1 ">
                <ul className=" divide-y divide-gray-200">
                    {cartItems.map((product) => (
                      <CartItem key={product.id} {...product} />
                    ))}
                </ul>
            </div>
            <LinkToShop to="/shop" className="ml-8 items-center justify-center px-4 py-2 rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Shop
            </LinkToShop>
        </CartItems>
      ) : (<p className="text-base text-center">Your shopping cart is empty</p>)}
    
    </DropdownContainer>
  );
}

export default CartDropdown;