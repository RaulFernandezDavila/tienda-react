import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function ItemDetail({ producto }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="detalle">
      <img
        src={producto.imagen}
        alt={producto.nombre}
      />

      <h2>{producto.nombre}</h2>

      <p>{producto.descripcion}</p>

      <p>${producto.precio}</p>

      <button onClick={() => addToCart(producto)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemDetail