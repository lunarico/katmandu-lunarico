import '../_general.scss'
import './_cart.scss'
import {CartContext} from "../../context/cartContext";
import {ItemCart} from '../itemCart/itemCart'
import {Fragment, useContext} from "react";
import {Link} from 'react-router-dom';
import {Form} from '../form/form'

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
            <h5>Total a pagar: ${totalPrice(cart)}</h5>
            <Link to ='./form' className="btnCart">Comprar</Link>
            <button onClick={clearCart} className="btnCart vaciar">Limpiar carrito</button>
          </Fragment>
        ) : (
          <Fragment>
            <p className="cartVacio">No tenés productos en el carrito</p>
            <Link to ='/' className="btnCart">Ver Productos</Link>
          </Fragment>
        )}
    </main>
  );
};