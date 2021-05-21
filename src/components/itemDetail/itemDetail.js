import './_itemDetail.scss';
import {CartContext} from '../../context/cartContext'
import {ItemCount} from '../itemCount/itemCount';
import {Link} from 'react-router-dom';
import {miStockResta, miStockSuma} from '../helper/helper'
import {useContext, useState, useEffect, Fragment} from 'react'

export const ItemDetail = ({props}) => {

    const {addItem} = useContext(CartContext)
    const [mostrarBoton, setMostrarBoton] = useState(true)

    const [contador, setContador] = useState(0)

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
                                onSubstract= {miStockResta} 
                                onAdd={miStockSuma} 
                                count={contador}
                                setCount = {setContador}
                                stock = {props.stock}
                                addToCart={addToCart}
                            />
                            <button onClick={addToCart} className="btnCount addCart">Agregar {contador} producto/s al carrito</button>
                        </Fragment>
                    ) : (
                        <button className="btnCount finalizar"><Link to='/cart'>Finalizar compra</Link></button> 
                    )}
                </div>
            </div>
        </div>
    )
}