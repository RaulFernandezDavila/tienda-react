import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import CartWidget from "./CartWidget";

import {
  Navbar,
  Nav,
  Container,
  Button,
} from "react-bootstrap";


function NavBar() {

  const { user, logout } = useContext(AuthContext);


  return (

    <Navbar expand="lg" bg="dark" variant="dark">

      <Container>

        


        <Navbar.Toggle aria-controls="menu" />


        <Navbar.Collapse id="menu">

          <Nav className="me-auto">


            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>


            <Nav.Link as={Link} to="/productos">
              Productos
            </Nav.Link>


            <Nav.Link as={Link} to="/carrito">
              Carrito
            </Nav.Link>


            {user && (

              <Nav.Link as={Link} to="/admin">
                Administración
              </Nav.Link>

            )}


          </Nav>



          <Nav>


            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>


                <Nav.Link as={Link} to="/registro">
                  Registro
                </Nav.Link>
              </>
            )}



            {user && (

              <>

                <span className="text-white me-3">
                  {user.email}
                </span>


                <Button
                  variant="outline-light"
                  onClick={logout}
                >
                  Cerrar sesión
                </Button>

              </>

            )}


            <div className="ms-3">
              <CartWidget />
            </div>


          </Nav>


        </Navbar.Collapse>

      </Container>

    </Navbar>

  );
}


export default NavBar;