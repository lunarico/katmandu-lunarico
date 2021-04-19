
import './_listaProductos.scss'

export const ListaProductos = (props) => 
    props.productos.map ((producto) => (
        <div>
            <h1>{producto.nombre}</h1>
            <p>{producto.precio}</p>
        </div>
    ))