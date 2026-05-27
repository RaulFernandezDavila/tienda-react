import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Cart() {
  const { cart } = useContext(CartContext)

  return (
    <div>
      <h2 className="titulo-productos">
        Carrito
      </h2>

      <div className="productos">
        {cart.map((producto, index) => (
          <div className="card" key={index}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
            />

            <h3>{producto.nombre}</h3>

            <p>${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart