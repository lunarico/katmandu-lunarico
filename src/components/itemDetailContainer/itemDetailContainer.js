import {useParams} from "react-router"
import {Productos} from '../products'
import {ItemDetail} from '../itemDetail/itemDetail'
import { useEffect, useState } from "react/cjs/react.development"
import './_itemDetailContainer.scss'

export const ItemDetailContainer = () => {
    const {itemId} = useParams()

    const [item, setItem] = useState ({})

    useEffect (() => {
        const myProduct = Productos.find(product => product.id === itemId)
        setItem(myProduct)
    }, [itemId])

    return (
        <div class="itemDetail">
            <ItemDetail props = {item} />
        </div>
    )
}