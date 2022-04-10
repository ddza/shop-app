import { createContext, useState } from "react";

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({ children }) => {
    const [products, useProducts] = useState();
    const value = { products, useProducts };

    return <ProductsContext value={value}>{ children }</ProductsContext>
}


