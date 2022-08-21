import { createSelector } from "reselect";

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer], 
    (cart) => cart.cartItems
)

export const selectIsCartHidden = createSelector(
    [selectCartReducer], 
    (cart) => cart.isCartHidden
)

export const selectQuantity = createSelector(
    [selectCartItems], 
    (cartItems) => cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity
    }, 0)
)

export const selectPrice = createSelector(
    [selectCartItems], 
    (cartItems) => cartItems.reduce((total, cartItem) => {
        return total + (cartItem.quantity * cartItem.price)
    }, 0)
)
