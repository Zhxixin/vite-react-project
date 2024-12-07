import { createContext } from "react";
import { ThemeContextType } from "./types";


const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;