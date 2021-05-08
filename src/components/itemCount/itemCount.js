import './_itemCount.scss'

export const ItemCount = ({onSubstract, onAdd, count, finalizarCompra}) => {

    return (
        <div className="contadorCont">
            <div className="contador">
                <button onClick={onSubstract} className="resta">-</button>
                {count}
                <button onClick={onAdd} className="suma">+</button>
            </div>
            <button onClick={finalizarCompra} className="addCart">Agregar {count} producto/s al carrito</button>
        </div>
    )
}
export default ItemCount;