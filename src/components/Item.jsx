import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";


function Item({ producto }) {

  return (

    <Card style={{ width: "18rem" }}>

      <Card.Img
        variant="top"
        src={producto.imagen}
        alt={producto.nombre}
      />


      <Card.Body>

        <Card.Title>
          {producto.nombre}
        </Card.Title>


        <Card.Text>
          ${producto.precio}
        </Card.Text>


        <Button
          as={Link}
          to={`/producto/${producto.id}`}
          variant="primary"
        >
          Ver detalle
        </Button>


      </Card.Body>


    </Card>

  );
}


export default Item;