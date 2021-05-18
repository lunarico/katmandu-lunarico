import '../_general.scss'
import './_cart.scss'
import {CartContext} from "../../context/cartContext";
import {Fragment, useContext} from "react";
import {Link} from 'react-router-dom';

export const Cart = () => {
  const {cart, clearCart, removeFromCart, totalProductPrice, totalPrice} = useContext(CartContext);

  return (
    <main className="cart">
      <h2>Mi Carrito</h2>
        {cart.length > 0 ? (
          <Fragment>
            <div className="listaProductos">
              {cart.map((props) => (
                <div className="card">
                  <img src={props.imagen}></img>
                  <h4>{props.nombre}</h4>
                  <p>Cantidad en el carrito: {props.quantity}</p>
                  <h5>${totalProductPrice(props)}</h5>
                  <button onClick={()=> removeFromCart(props.id)} className="btnCard">Quitar del carrito</button>
                </div>))}
            </div>
            <h5>Total a pagar: ${totalPrice(cart)}</h5>
          </Fragment>
          ) : (
          <Fragment>
            <p className="cartVacio">No tenés productos en el carrito</p>
            <Link to ='/productos' className="btnCart">Ver Productos</Link>
          </Fragment>)
        }
        {cart.length > 1 && <button onClick={clearCart} className="btnCart">Limpiar carrito</button>}
    </main>
  );
};