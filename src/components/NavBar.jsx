import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>

      <Link to="/productos">
        Productos
      </Link>

      <Link to="/carrito">
        Carrito
      </Link>

      <CartWidget />
    </nav>
  )
}

export default NavBar