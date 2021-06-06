import '../_general.scss'
import './_form.scss'
import 'firebase/firestore'
import "aos/dist/aos.css"
import {CartContext} from "../../context/cartContext";
import {getFirestore} from '../../firebase/index'
import {Input} from '../input/input'
import {Link} from 'react-router-dom';
import {useState, useContext, useEffect, Fragment} from "react"
import AOS from 'aos'
import firebase from 'firebase/app'
import Logo from '../../logo.png'
import React from 'react';

export const Form = () => {
    const {cart, totalPrice, clearCart} = useContext(CartContext);
    const [cartEmpty, setCartEmpty] = useState (false)
    const [form, setForm] = useState({name:'', mail:'', phone:''})
    const [isDisabled, setIsDisabled] = useState(true)

    const formItems = [
        {
            id:"name",
            label:"Nombre",
            value:form.name
        },{
            id:"mail",
            label:"Mail",
            value:form.mail
        },{
            id:"phone",
            label:"Teléfono",
            value:form.phone
        }
    ]

    const handleChange = (id, value) => {
        const newForm = {...form, [id]: value}
        setForm(newForm)
    };

    const buyOrder = () => {
        updateStock()
        clearCart()
        const db = getFirestore()
        const orders = db.collection('orders')
        const newOrder = {
                            buyer: form, 
                            items: cart.map(data => ({id: data.id, 
                                                    nombre: data.nombre, 
                                                    precio: data.precio, 
                                                    cantidad: data.quantity})),
                            date: firebase.firestore.Timestamp.fromDate(new Date()),
                            total: totalPrice(cart)
                        }
        orders.add(newOrder)
        setCartEmpty(true)
        alert(`Gracias por tu compra ${form.name}!`)
    };

    const updateStock = () => {
        const db = getFirestore()
        const batch = db.batch()

        cart.forEach((item) => {
            const itemCart = db.collection('items').doc(item.id)
            batch.update(itemCart, {stock: item.stock - item.quantity})
        })
        batch.commit()
    };

    useEffect (()=> {
        const newDisabledButton = [form.name, form.mail, form.phone].includes('')
        setIsDisabled(newDisabledButton)
    }, [form])

    useEffect(() => {AOS.init({duration : 2000});}, [])

    return (
        <main>
            {!cartEmpty ? (
            <Fragment>
                <h1 className="titForm">Por favor completá tus datos para continuar con la compra</h1>
                <div className="contForm">
                    <img src={Logo} data-aos={"flip-left"} className="logoForm" alt="Logo Katmandú"></img>
                    <form className="formulario">
                        {formItems.map (({id, label, value}) => (
                            <Input key={id} id={id} label={label} value={value} onChange={handleChange}/>
                        ))}
                    </form>
                </div>
                <button disabled={isDisabled} onClick={buyOrder} className="buttonForm">Enviar</button>
            </Fragment>
            ) : (
            <button className="buttonForm volver">
                <Link to ='/'>Volver al inicio</Link>
            </button>
            )}
        </main>
    )
}