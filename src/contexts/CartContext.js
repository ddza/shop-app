import { createContext, useState, useEffect } from "react";

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

export const CartContext =  createContext({
    isCartHidden : true, 
    setIsCartHidden: () => {}, 
    cartItems: [], 
    addItemToCart: () => {}, 
    totalQuantity: 0
});

export const CartProvider = ({ children }) =>{
    const [isCartHidden, setIsCartHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItemToCart = (itemToAdd) => {
        setCartItems(addQuantityItem(cartItems, itemToAdd));
    }

    useEffect(()=>{
        const newQuantity = cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity
        }, 0);

        setTotalQuantity(newQuantity)
    }, [cartItems]);
    
    const value = { isCartHidden, setIsCartHidden, cartItems, addItemToCart, totalQuantity};
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}