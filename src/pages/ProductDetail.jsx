import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../components/ItemDetail"

function ProductDetail() {
  const [producto, setProducto] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => {
        const productoEncontrado = data.find(
          (item) => item.id == id
        )

        setProducto(productoEncontrado)
      })
  }, [id])

  return (
    <div>
      {producto && (
        <ItemDetail producto={producto} />
      )}
    </div>
  )
}

export default ProductDetail