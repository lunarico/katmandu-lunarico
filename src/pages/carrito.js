import { useParams } from "react-router"

export const Carrito = () => {
    const {productoId} = useParams()
    return (
        <main>
            <h1>HOLA</h1>
            <p>Producto: {productoId}</p>
        </main>
    )
}