import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (producto) => {
    setCart([...cart, producto])
  }

  const totalProducts = () => {
    return cart.length
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}