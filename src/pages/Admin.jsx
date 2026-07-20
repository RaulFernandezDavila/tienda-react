import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";


function Admin() {

  const [productos, setProductos] = useState([]);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  const [editando, setEditando] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  const obtenerProductos = async () => {

    try {

      setLoading(true);
      setError("");

      const productosRef = collection(db, "productos");

      const snapshot = await getDocs(productosRef);


      const listaProductos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));


      setProductos(listaProductos);


    } catch (error) {

      console.error(error);

      setError("No se pudieron cargar los productos");


    } finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    obtenerProductos();

  }, []);




  const agregarProducto = async (e) => {

    e.preventDefault();


    if (!nombre.trim()) {

      alert("El nombre es obligatorio");

      return;

    }


    if (Number(precio) <= 0) {

      alert("El precio debe ser mayor a 0");

      return;

    }



    try {


      await addDoc(collection(db, "productos"), {

        nombre,

        descripcion,

        precio: Number(precio),

        imagen,

      });



      alert("Producto agregado correctamente");


      limpiarFormulario();


      obtenerProductos();



    } catch (error) {

      console.error(error);

      alert("Error al agregar producto");

    }

  };




  const editarProducto = (producto) => {


    setEditando(producto.id);

    setNombre(producto.nombre);

    setDescripcion(producto.descripcion);

    setPrecio(producto.precio);

    setImagen(producto.imagen);


  };




  const actualizarProducto = async (e) => {

    e.preventDefault();


    try {


      const productoRef = doc(
        db,
        "productos",
        editando
      );


      await updateDoc(productoRef, {

        nombre,

        descripcion,

        precio: Number(precio),

        imagen,

      });



      alert("Producto actualizado correctamente");


      limpiarFormulario();


      obtenerProductos();



    } catch (error) {

      console.error(error);

      alert("Error al actualizar producto");

    }

  };





  const eliminarProducto = async (id) => {


    const confirmar = window.confirm(
      "¿Seguro que querés eliminar este producto?"
    );


    if (!confirmar) return;



    try {


      const productoRef = doc(
        db,
        "productos",
        id
      );


      await deleteDoc(productoRef);


      alert("Producto eliminado correctamente");


      obtenerProductos();



    } catch (error) {

      console.error(error);

      alert("Error al eliminar producto");

    }


  };




  const limpiarFormulario = () => {

    setNombre("");

    setDescripcion("");

    setPrecio("");

    setImagen("");

    setEditando(null);

  };





  return (

    <Container className="mt-4">


      <h2 className="mb-4">
        Panel de Administración
      </h2>



      {loading && (
        <p>Cargando productos...</p>
      )}


      {error && (
        <p>{error}</p>
      )}






      <Form
        onSubmit={
          editando
            ? actualizarProducto
            : agregarProducto
        }
      >


        <h4>
          {editando
            ? "Editar producto"
            : "Agregar producto"}
        </h4>



        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) =>
            setNombre(e.target.value)
          }
        />



        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) =>
            setDescripcion(e.target.value)
          }
        />



        <Form.Control
          className="mb-3"
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) =>
            setPrecio(e.target.value)
          }
        />



        <Form.Control
          className="mb-3"
          type="text"
          placeholder="URL imagen"
          value={imagen}
          onChange={(e) =>
            setImagen(e.target.value)
          }
        />



        <Button type="submit">

          {editando
            ? "Actualizar producto"
            : "Agregar producto"}

        </Button>



      </Form>





      <hr />





      <Row>


        {productos.map((producto) => (


          <Col
            md={4}
            key={producto.id}
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

                  {producto.descripcion}

                </Card.Text>



                <Card.Text>

                  ${producto.precio}

                </Card.Text>



                <Button
                  className="me-2"
                  onClick={() =>
                    editarProducto(producto)
                  }
                >

                  Editar

                </Button>




                <Button
                  variant="danger"
                  onClick={() =>
                    eliminarProducto(producto.id)
                  }
                >

                  Eliminar

                </Button>



              </Card.Body>



            </Card>


          </Col>


        ))}


      </Row>



    </Container>

  );

}


export default Admin;