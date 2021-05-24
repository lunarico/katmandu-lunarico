import './_itemDetail.scss';
import {CartContext} from '../../context/cartContext'
import {ItemCount} from '../itemCount/itemCount';
import {Link} from 'react-router-dom';
import {useContext, useState, useEffect, Fragment} from 'react'

export const ItemDetail = ({props}) => {

    const {addItem, contador, setContador, onAdd, onSubmit} = useContext(CartContext)
    const [mostrarBoton, setMostrarBoton] = useState(true)

    const addToCart = () => {
        addItem(props, contador)
        setMostrarBoton(false)
    }

    useEffect (() => {setContador(0)}, [])

    return (
        <div className="cardDetail">
            <img src={props.imagen}></img>
            <div className="cardProp">
                <h1>{props.nombre}</h1>
                <p>${props.precio}</p>
                <div className="contadorBoton">
                    {mostrarBoton ? (
                        <Fragment>
                            <ItemCount 
                                count={contador}
                                quantity={contador}
                                onAdd={onAdd} 
                                onSubstract={onSubmit} 
                                setter={setContador}
                                stock={props.stock}
                            />
                            {props.stock > 0 && <button onClick={addToCart} className="btnCount addCart">
                                                    Agregar {contador} producto/s al carrito
                                                </button>}
                        </Fragment>
                    ) : (
                        <button className="btnCount finalizar"><Link to='/cart'>Finalizar compra</Link></button> 
                    )}
                </div>
            </div>
        </div>
    )
}