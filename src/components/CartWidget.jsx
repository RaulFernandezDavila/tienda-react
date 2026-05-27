import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartWidget() {
  const { totalProducts } = useContext(CartContext)

  return (
    <div>
      🛒 {totalProducts()}
    </div>
  )
}

export default CartWidget