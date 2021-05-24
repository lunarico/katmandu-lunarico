import {CartContext} from "../../context/cartContext";
import {ItemCount} from '../itemCount/itemCount';
import {useContext} from "react";

export const ItemCart = ({item}) => {

  const {removeFromCart, totalProductPrice, addQuantity, removeQuantity, setCart} = useContext(CartContext);

  return (
    <div className="card">
        <img src={item.imagen}></img>
        <h4>{item.nombre}</h4>
        <ItemCount 
          count={item}
          onAdd={addQuantity}
          onSubstract={removeQuantity}
          quantity = {item.quantity}
          setter={setCart}
          stock={item.stock}
        />
        <h5>${totalProductPrice(item)}</h5>
        <button onClick={()=> removeFromCart(item.id)} className="btnCard">Quitar del carrito</button>
    </div>
  );
};