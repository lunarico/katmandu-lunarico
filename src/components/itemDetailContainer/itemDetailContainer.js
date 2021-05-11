import './_itemDetailContainer.scss'
import {useEffect, useState} from "react/cjs/react.development"
import {ItemDetail} from '../itemDetail/itemDetail'
import {Productos} from '../products'
import {useParams} from "react-router"

export const ItemDetailContainer = () => {
    const {itemId} = useParams()

    const [item, setItem] = useState ({})

    useEffect (() => {
        const myProduct = Productos.find(product => product.id === itemId)
        setItem(myProduct)
    }, [itemId])

    return (
        <div class="itemDetail">
            <ItemDetail props={item} />
        </div>
    )
}