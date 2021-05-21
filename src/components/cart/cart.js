import '../_general.scss'
import './_cart.scss'
import {CartContext} from "../../context/cartContext";
import {ItemCart} from '../itemCart/itemCart'
import {Fragment, useContext} from "react";
import {Link} from 'react-router-dom';

export const Cart = () => {
  const {cart, clearCart, totalPrice} = useContext(CartContext);

  return (
    <main className="cart">
      <h2>Mi Carrito</h2>
        {cart.length > 0 ? (
          <Fragment>
            <div className="listaProductos">
              {cart.map((props) => <ItemCart item={props}/>)}
            </div>
            <button onClick={clearCart} className="btnCart">Limpiar carrito</button>
            <h5>Total a pagar: ${totalPrice(cart)}</h5>
          </Fragment>
        ) : (
          <Fragment>
            <p className="cartVacio">No tenés productos en el carrito</p>
            <Link to ='/productos' className="btnCart">Ver Productos</Link>
          </Fragment>
        )}
    </main>
  );
};