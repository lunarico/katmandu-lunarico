import './_itemCount.scss'

export const ItemCount = ({onSubstract, onAdd, count, setter, quantity, stock}) => {    
    return (
        <div className="contadorCont">
            {stock > 0 ? (
                <div className="contador">
                    <button onClick={() => onSubstract(count, setter)} className="resta">-</button>
                    {quantity}
                    <button onClick={() => onAdd(count, setter, stock)} className="suma">+</button>
                </div>
            ):(
                <p>Lo sentimos, no tenemos más stock de este producto</p>
            )} 
        </div>
    )
}
export default ItemCount;