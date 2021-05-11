import '../_general.scss'
import './_cart.scss'
import {CartContext} from "../../context/cartContext";
import {useContext} from "react";

export const Cart = () => {
  const {cart, clearCart, removeFromCart} = useContext(CartContext);

  return (
    <main className="cart">
      <h2>Mi Carrito</h2>
      <div class="listaProductos">
        {cart.length > 0 ? (
          cart.map((props) => (
            <div className="card">
              <img src={require(`../../img/${props.imagen}`).default}></img>
              <h4>{props.nombre}</h4>
              <h5>${props.precio}</h5>
              <p>Cantidad en el carrito: {props.quantity}</p>
              <button onClick={()=> removeFromCart(props.id)} className="btnCard">Quitar del carrito</button>
            </div>))
          ) : (
            <p>No tenes productos en el carrito</p> )}
        </div>
        {cart.length > 0 ? (<button onClick={clearCart} className="btnClear">Limpiar carrito</button>) : (<p></p>)}
    </main>
  );
};
