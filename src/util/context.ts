import { createContext } from "react";
import { ProductContextType, ThemeContextType } from "./types";


export const ThemeContext = createContext<ThemeContextType | null>(null);
export const ProductsContext = createContext<ProductContextType | null>(null);

