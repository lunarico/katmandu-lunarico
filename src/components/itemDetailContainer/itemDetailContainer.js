import './_itemDetailContainer.scss'
import {getFirestore} from '../../firebase'
import {ItemDetail} from '../itemDetail/itemDetail'
import {useEffect, useState} from "react/cjs/react.development"
import {useParams} from "react-router"

export const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const [item, setItem] = useState ({})
    
    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection('items')
        const producto = itemCollection.doc(itemId)

        producto.get().then((doc) => {
            const data = {id: doc.id, ...doc.data(),}
            setItem(data)
        })}, [itemId])

    return (
        <div class="itemDetail">
            <ItemDetail props={item} />
        </div>
    )
}