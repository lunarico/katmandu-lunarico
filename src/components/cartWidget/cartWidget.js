import {CartContext} from '../../context/cartContext';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useContext, useState, useEffect} from 'react'

export const CartWidget = () => {

    const {cart} = useContext(CartContext)
    const [total, setTotal] = useState(0);

    const quantityCount = (cart) => {
        const result = cart.reduce((acc, item) => (acc += item.quantity), 0);
        setTotal(result)
    };
      
    useEffect(() => {quantityCount(cart)}, [cart, total])    

    return (
        <div>
            <FontAwesomeIcon icon = {faShoppingBag} />
            <p className="quantity">{total}</p>
        </div>
    )
} 