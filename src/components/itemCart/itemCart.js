import {CartContext} from "../../context/cartContext";
import {useContext, useEffect} from "react";
import {ItemCount} from '../itemCount/itemCount';
import {miStockResta, miStockSuma} from '../helper/helper'
import {useState} from 'react/cjs/react.development';

export const ItemCart = ({item}) => {

  const {removeFromCart, totalProductPrice, actuallyCount} = useContext(CartContext);
  const [cartContador, setCartContador] = useState(item?.quantity)


  return (
    <div className="card">
        <img src={item.imagen}></img>
        <h4>{item.nombre}</h4>
            <ItemCount
            onSubstract= {miStockResta} 
            onAdd={miStockSuma} 
            count={cartContador}
            setCount={setCartContador}
            stock={item.stock}
            item = {item}
            actuallyCount={actuallyCount}/>
        <p>Cantidad en el carrito: {cartContador}</p>
        <h5>${totalProductPrice(item)}</h5>
        <button onClick={()=> removeFromCart(item.id)} className="btnCard">Quitar del carrito</button>
    </div>
  );
};