import './_itemDetail.scss'
import ItemCount from '../itemCount/itemCount'
import { useState } from 'react'
import {Link} from 'react-router-dom';

export const ItemDetail = ({props}) => {

    const [contador, setContador] = useState(1)
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

    const finalizarCompra = () => {
        setMostrarBoton(false)
    }

    return (
        <div className="cardDetail">
            <img src={props.imagen ? require(`../../img/${props.imagen}`).default:""}></img>
            <div className="cardProp">
                <h1>{props.nombre}</h1>
                <p>${props.precio}</p>
                <div className="contadorBoton">
                    {mostrarBoton ? ( 
                        <ItemCount 
                            onSubstract= {miStockResta} 
                            onAdd={miStockSuma} 
                            stock={props.stock} 
                            count={contador} 
                            name={props.nombre}
                            finalizarCompra={finalizarCompra}/>
                    ) : (
                        <button className="finalizar"><Link to='/cart'>Finalizar compra</Link></button> 
                    )}
                </div>
            </div>
        </div>
    )
}