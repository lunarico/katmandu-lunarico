import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {useContext} from 'react'
import {CartContext} from '../../context/cartContext';

export const CartWidget = () => {

    const {quantityCount} = useContext(CartContext)

    return (
        <div>
            <FontAwesomeIcon icon = {faShoppingBag} />
            <p className="quantity">{quantityCount()}</p>
        </div>
    )
} 