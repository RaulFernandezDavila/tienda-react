import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";


function CartWidget() {

  const { totalProducts } = useContext(CartContext);


  return (

    <Link
      to="/carrito"
      style={{
        textDecoration: "none"
      }}
    >

      <FaShoppingCart
        size={25}
        color="white"
      />


      <Badge
        bg="danger"
        className="ms-1"
      >

        {totalProducts()}

      </Badge>


    </Link>

  );

}


export default CartWidget;