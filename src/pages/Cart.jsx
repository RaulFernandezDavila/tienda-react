import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Card, Container, Row, Col } from "react-bootstrap";


function Cart() {

  const {
    cart,
    removeFromCart,
    clearCart
  } = useContext(CartContext);



  return (

    <Container className="mt-4">

      <h2>
        Carrito
      </h2>



      {cart.length === 0 ? (

        <p>
          El carrito está vacío
        </p>

      ) : (

        <>

          <Row>

            {cart.map((producto, index) => (

              <Col
                md={4}
                key={index}
                className="mb-4"
              >

                <Card>


                  {producto.imagen && (

                    <Card.Img
                      variant="top"
                      src={producto.imagen}
                      alt={producto.nombre}
                    />

                  )}



                  <Card.Body>


                    <Card.Title>

                      {producto.nombre}

                    </Card.Title>



                    <Card.Text>

                      ${producto.precio}

                    </Card.Text>



                    <Button
                      variant="danger"
                      onClick={() =>
                        removeFromCart(producto.id)
                      }
                    >

                      Eliminar

                    </Button>


                  </Card.Body>


                </Card>


              </Col>

            ))}


          </Row>



          <Button
            variant="secondary"
            onClick={clearCart}
          >

            Vaciar carrito

          </Button>


        </>

      )}


    </Container>

  );

}


export default Cart;