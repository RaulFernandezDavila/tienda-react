import { useEffect, useState } from "react";
import Item from "./Item";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";


function ItemListContainer() {

  const [productos, setProductos] = useState([]);

  const [busqueda, setBusqueda] = useState("");



  useEffect(() => {

    const obtenerProductos = async () => {

      try {

        const productosRef = collection(db, "productos");

        const snapshot = await getDocs(productosRef);



        const listaProductos = snapshot.docs.map((doc) => ({

          id: doc.id,

          ...doc.data(),

        }));



        setProductos(listaProductos);



      } catch (error) {

        console.error(
          "Error al obtener los productos:",
          error
        );

      }

    };


    obtenerProductos();


  }, []);




  const productosFiltrados = productos.filter((producto) =>

    producto.nombre

      .toLowerCase()

      .includes(busqueda.toLowerCase())

  );




  return (

    <div>


      <input

        type="text"

        placeholder="Buscar producto..."

        value={busqueda}

        onChange={(e) =>
          setBusqueda(e.target.value)
        }

        className="form-control mb-4"

      />



      <div className="d-flex flex-wrap justify-content-center gap-4">


        {productosFiltrados.map((producto) => (


          <Item

            key={producto.id}

            producto={producto}

          />


        ))}



      </div>



    </div>

  );

}


export default ItemListContainer;