import { useEffect, useState } from "react"
import Item from "./Item"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function ItemListContainer() {
  const [productos, setProductos] = useState([])

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
      console.error("Error al obtener los productos:", error);
    }
  };

  obtenerProductos();
}, []);

  return (
    <div className="productos">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          producto={producto}
        />
      ))}
    </div>
  )
}

export default ItemListContainer