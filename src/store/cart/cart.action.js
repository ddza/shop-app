 import { CART_ACTIONS_TYPE } from "./cart.types";
 import { createAction } from "../../utils/reducer/reducer.utils";
  

export const setIsCartHidden = (cartState) =>  {
     return createAction(CART_ACTIONS_TYPE.SET_IS_CART_HIDDEN, cartState);
}


const addQuantityItem = (cartItems, itemToAdd) => {
    console.log(itemToAdd)
    const existingItem = cartItems.find(
        (cartItem) => cartItem.id === itemToAdd.id
    )
    
    if(existingItem) {
        return cartItems.map(
                (cartItem) => cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            )
    }

    return [...cartItems, {...itemToAdd, quantity: 1}];    
}

const removeItem = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(
        (cartItem) => cartItem.id === itemToRemove.id
    )
    
    if(existingItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== itemToRemove.id
        )
    }
   
    if(existingItem) {
        return cartItems.map(
            (cartItem, index) =>cartItem.id === itemToRemove.id  
                ? {...cartItem, quantity: cartItem.quantity - 1} 
                : cartItem
        )
    }
}

const clearItem = (cartItems, itemToClear) => {
    const existingItem = cartItems.find(
        (cartItem) => cartItem.id === itemToClear.id
    )

    if(existingItem) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== itemToClear.id
        )
    }
}
export const addItemToCart = (cartItems, itemToAdd) => {
    const newCartItems = addQuantityItem(cartItems, itemToAdd)
   return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS ,newCartItems);
}

export const removeItemFromCart = (cartItems, intemToRemove) => {
    const newCartItems = removeItem(cartItems, intemToRemove);
    return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS ,newCartItems);
}
export const clearItemFromCart = (cartItems, itemToClear) => {
    const newCartItems = clearItem(cartItems, itemToClear);
   return  createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS ,newCartItems);
}


 export const setCartItems = (newCartItems) => {

   return createAction(
            CART_ACTIONS_TYPE.SET_CART_ITEMS, 
            { 
                cartItems: newCartItems,
                // totalQuantity : newQuantity, 
                // totalPrice: newTotalPrice
            }
        )
 }