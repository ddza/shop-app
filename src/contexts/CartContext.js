import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

const addQuantityItem = (cartItems, itemToAdd) => {
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

export const CartContext =  createContext({
    isCartHidden : true, 
    setIsCartHidden: () => {}, 
    cartItems: [], 
    addItemToCart: () => {}, 
    totalQuantity: 0, 
    removeItemFromCart: () => {}, 
    clearItemFromCart: () => {}, 
    totalPrice: 0
});

export const CART_ACTIONS_TYPE = {

    SET_IS_CART_HIDDEN: 'SET_IS_CART_HIDDEN', 
    SET_CART_ITEMS: 'SET_CART_ITEMS'

}
const cartReducer = (state, action) => { 
    const {type, payload} = action;

    switch(type) {
         case CART_ACTIONS_TYPE.SET_IS_CART_HIDDEN: 
            return {
                ...state, 
                isCartHidden: payload
            }
        case CART_ACTIONS_TYPE.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }

}
const INITIAL_STATE = {
    isCartHidden : true,
    cartItems: [],
    totalQuantity: 0, 
    totalPrice: 0
}
export const CartProvider = ({ children }) =>{

    const [ { isCartHidden, cartItems, totalQuantity, totalPrice}, dispatch ] = useReducer(cartReducer, INITIAL_STATE);
 
    const setCartItems = (newCartItems) => {
           /** 
            * generate newTotalQunatity, 
            * generate newTotalPrice
            * 
            * dispatch new action with payload = {
            *      newCartItems, 
            *      newTotalQuantity, 
            *      newTotalPrice
            * 
            * } */
        const newQuantity = newCartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity
        }, 0);

        const newTotalPrice = newCartItems.reduce((total, cartItem) => {
            return total + (cartItem.quantity * cartItem.price)
        }, 0);

        dispatch( createAction(
                    CART_ACTIONS_TYPE.SET_CART_ITEMS, 
                    { 
                        cartItems: newCartItems,
                        totalQuantity : newQuantity, 
                        totalPrice: newTotalPrice
                    }))
    }

    const setIsCartHidden = (cartState) =>  {
        dispatch( createAction(CART_ACTIONS_TYPE.SET_IS_CART_HIDDEN, cartState));
    }

    const addItemToCart = (itemToAdd) => {
        const newCartItems = addQuantityItem(cartItems, itemToAdd)
        setCartItems(newCartItems);
    }
    
    const removeItemFromCart = (intemToRemove) => {
        const newCartItems = removeItem(cartItems, intemToRemove);
        setCartItems(newCartItems);
    }
    const clearItemFromCart = (itemToClear) => {
        const newCartItems = clearItem(cartItems, itemToClear);
        setCartItems(newCartItems);
    }
  
    const value = { 
        isCartHidden, 
        setIsCartHidden, 
        cartItems, 
        addItemToCart, 
        totalQuantity, 
        removeItemFromCart, 
        clearItemFromCart, 
        totalPrice
    };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}