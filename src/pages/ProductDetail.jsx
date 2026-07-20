import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../components/ItemDetail"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function ProductDetail() {
  const [producto, setProducto] = useState(null)

  const { id } = useParams()

  useEffect(() => {
  const obtenerProducto = async () => {
    try {
      const productoRef = doc(db, "productos", id);
      const snapshot = await getDoc(productoRef);

      if (snapshot.exists()) {
        setProducto({
          id: snapshot.id,
          ...snapshot.data(),
        });
      } else {
        console.log("El producto no existe");
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

  obtenerProducto();
}, [id]);

  return (
    <div>
      {producto && (
        <ItemDetail producto={producto} />
      )}
    </div>
  )
}

export default ProductDetail