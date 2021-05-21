import { Fragment } from 'react';
import './_itemCount.scss'

export const ItemCount = ({onSubstract, onAdd, count, setCount, stock, item, actuallyCount}) => { 
    

    return (
    <div className="contadorCont">
        <div className="contador">
            {actuallyCount ? (
                <Fragment>
                    <button onClick={() => actuallyCount(item, count)} className="resta">-</button>
                    {count}
                    <button onClick={() => actuallyCount(item, count)} className="suma">+</button>
                </Fragment>
            ) : (
                <Fragment>
                    <button onClick={() => onSubstract(count, setCount)} className="resta">-</button>
                    {count}
                    <button onClick={() => onAdd(count, setCount, stock)} className="suma">+</button>
                </Fragment>
            )}
        </div>
    </div>
  )
}
export default ItemCount;