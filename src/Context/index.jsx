import { createContext } from "react";

const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    return (
        <ShoppingCartProvider>
            {children}
        </ShoppingCartProvider>
    )
}