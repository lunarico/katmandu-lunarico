import './_form.scss'
import 'firebase/firestore'
import {CartContext} from "../../context/cartContext";
import {getFirestore} from '../../firebase/index'
import {Link} from 'react-router-dom';
import {useState, useContext} from "react"
import firebase from 'firebase/app'
import React from 'react';

export const Form = () => {
    const {cart, totalPrice, clearCart} = useContext(CartContext);

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [orderId, setOrderId] = useState('')

    const updateStock = () => {
        const db = getFirestore()
        const batch = db.batch()

        cart.forEach((item) => {
            const itemCart = db.collection('items').doc(item.id)
            batch.update(itemCart, {stock: item.stock - item.quantity})
        })
        batch.commit()
    };

    const buyOrder = (e) => {
        updateStock()
        clearCart()
        e.preventDefault()
        const db = getFirestore()
        const orders = db.collection('orders')
        const newOrder = {
                            buyer: {name, mail, phone}, 
                            items: cart,
                            date: firebase.firestore.Timestamp.fromDate(new Date()),
                            total: totalPrice(cart)
                        }
        orders.add(newOrder).then(({id}) => {
            setOrderId(id)
        })
        alert(`Gracias por tu compra ${name}!`)
    };

    return (
        <form className="formulario">
            <label for="name">Nombre</label>
            <input onChange={(e) => setName(e.target.value)} placeholder="Nombre" type="name" name="name">
            </input>
            <label for="mail">Mail</label>
            <input onChange={(e) => setMail(e.target.value)} placeholder="correo@correo.com" type="email" name="mail">
            </input>
            <label for="phone">Teléfono</label>
            <input onChange={(e) => setPhone(e.target.value)} placeholder="xx-xxxxxxxx" type="phone" name="phone">
            </input>
            <button onClick={buyOrder}><Link to ='/'>Enviar</Link></button>
        </form>
    )
}

