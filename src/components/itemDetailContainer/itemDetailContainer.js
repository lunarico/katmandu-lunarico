import './_itemDetailContainer.scss'
import {AnimationContext} from "../../context/animationContext";
import {getFirestore} from '../../firebase'
import {ItemDetail} from '../itemDetail/itemDetail'
import {useEffect, useState, useContext} from "react/cjs/react.development"
import {useParams} from "react-router"
import Lottie from 'react-lottie'

export const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const [item, setItem] = useState ({})
    const [itemExists, setItemExists] = useState(false)
    const [loading, setloading] = useState(true)
    const {animation, defaultOptions} = useContext(AnimationContext);
    
    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection('items')
        const producto = itemCollection.doc(itemId)

        producto.get().then((doc) => {
            setloading(false)
            if (doc.exists) {
                const data = {id: doc.id, ...doc.data(),}
                setItem(data)
                setItemExists(true)
            }
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
            ) : (
                itemExists ? (
                    <ItemDetail props={item} />
                ) : (
                    <p>Lo sentimos, este producto no existe</p>
                )
            )}
        </main>
    )
}