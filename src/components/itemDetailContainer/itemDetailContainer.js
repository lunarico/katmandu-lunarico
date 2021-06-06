import './_itemDetailContainer.scss'
import {CartContext} from "../../context/cartContext";
import {getFirestore} from '../../firebase'
import {ItemDetail} from '../itemDetail/itemDetail'
import {useEffect, useState, useContext} from "react/cjs/react.development"
import {useParams} from "react-router"
import Lottie from 'react-lottie'

export const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const [item, setItem] = useState ({})
    const [loading, setloading] = useState(true)
    const {animation, defaultOptions} = useContext(CartContext);
    
    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection('items')
        const producto = itemCollection.doc(itemId)

        producto.get().then((doc) => {
            const data = {id: doc.id, ...doc.data(),}
            setItem(data)
            setloading(false)
        })}, [itemId])

    return (
        <main className="itemDetail">
            {loading ? (
                <Lottie 
                    options={defaultOptions}
                    height={300}
                    width={300}
                    isStopped={animation.isStopped}
                    isPaused={animation.isPaused}
                />
            ):(
                <ItemDetail props={item} />
            )}
        </main>
    )
}