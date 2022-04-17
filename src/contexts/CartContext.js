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

export const CartProvider = ({ children }) =>{
    const [isCartHidden, setIsCartHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemToCart = (itemToAdd) => {
        setCartItems(addQuantityItem(cartItems, itemToAdd));
    }
    const removeItemFromCart = (intemToRemove) => {
        setCartItems(removeItem(cartItems, intemToRemove));
    }
    const clearItemFromCart = (itemToClear) => {
        setCartItems(clearItem(cartItems, itemToClear));
    }
    useEffect(()=>{
        const newQuantity = cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity
        }, 0);

        setTotalQuantity(newQuantity)
    }, [cartItems]);

    useEffect(()=>{
        const totalPrice = cartItems.reduce((total, cartItem) => {
            return total + (cartItem.quantity * cartItem.price)
        }, 0)

        setTotalPrice(totalPrice)
    }, [cartItems]);
    
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