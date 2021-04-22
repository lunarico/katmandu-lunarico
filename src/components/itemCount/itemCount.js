import './_itemCount.scss'
import {useState} from 'react'

export const ItemCount = ({stock, initial}) => {

    const [contador, setContador] = useState(parseInt(initial))

    const miStockResta = () => {
        if (contador >= "1") {
            setContador(contador-1)
        }else{
            alert("No tenés productos agregados")
        }
    }
    const miStockSuma = () => {
        if (contador < stock) {
            setContador(contador+1)
        }else{
            alert("No tenemos más stock")
        }
    }
    return (
        <div>
            <h3>Contador</h3>
            <div className = "contador">
                <button className ="resta" onClick = {miStockResta}>-</button>
                {contador}
                <button className = "suma" onClick = {miStockSuma}>+</button>
            </div>
        </div> 
    )
}

/*
export const ItemCount = () => {
    const [contador, setContador] = useState(0)

    return (
        <div>
            <h3>Contador</h3>
            <div className = "contador">
                <button className = "resta" onClick = {()=>setContador(contador-1)}>-</button>
                {contador}
                <button className = "suma" onClick = {()=>setContador(contador+1)}>+</button>
            </div>
        </div>
    )
}*/
