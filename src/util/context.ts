import { createContext, useContext } from "react";
import { ProductContextType, ThemeContextType } from "./types";


export const ThemeContext = createContext<ThemeContextType | null>(null);
export const ProductsContext = createContext<ProductContextType | null>(null);

export const useProducts = () => {
    const context = useContext(ProductsContext);

    if (!context) {
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
}