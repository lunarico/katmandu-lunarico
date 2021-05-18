import './_itemDetail.scss';
import {CartContext} from '../../context/cartContext'
import {Link} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react'
import ItemCount from '../itemCount/itemCount';

export const ItemDetail = ({props}) => {

    const {addItem, contador, setContador} = useContext(CartContext)
    const [mostrarBoton, setMostrarBoton] = useState(true)
    
    const miStockResta = () => {
        if (contador >= "1") {
            setContador(contador-1)
        }else{
            alert("No tenés productos agregados")
        }
    }

    const miStockSuma = () => {
        if (contador < props.stock) {
            setContador(contador+1)
        }else{
            alert("No tenemos más stock")
        }
    }

    const addToCart = () => {
        addItem(props)
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
                        <ItemCount 
                            onSubstract= {miStockResta} 
                            onAdd={miStockSuma} 
                            count={contador}
                            addToCart={addToCart}/>
                    ) : (
                        <button className="finalizar"><Link to='/cart'>Finalizar compra</Link></button> 
                    )}
                </div>
            </div>
        </div>
    )
}