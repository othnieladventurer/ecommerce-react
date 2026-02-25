import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(productId) {
        const existing = cartItems.find(item => item.id === productId);

        if (existing) {
            updateCartQuantity(productId, existing.quantity + 1);
        } else {
            setCartItems([...cartItems, { id: productId, quantity: 1 }]);
        }
    }

    function updateCartQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            setCartItems(cartItems.filter(item => item.id !== productId));
            return;
        }

        setCartItems(
            cartItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    }

    function removeItemCompletely(productId) {
        setCartItems(cartItems.filter(item => item.id !== productId));
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                updateCartQuantity,
                removeItemCompletely
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}