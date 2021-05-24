import '../_general.scss'
import './_itemList.scss'
import {getFirestore} from '../../firebase/index'
import {Item} from '../item/item'
import {useEffect, useState} from 'react/cjs/react.development'
import {useParams} from "react-router"
import Lottie from 'react-lottie'
import animationData from '../../loading.json'

export const ItemList = () => {

    const {categoryId} = useParams()
    const [items, setItems] = useState([])
    const [itemExists, setItemExists] = useState(false)

    useEffect(() => {
        const getProducts = () => {
            const db = getFirestore();
            const itemCollection = db.collection('items')
            
            if(categoryId){
                const itemsCategory = itemCollection.where('categoryId', '==', categoryId)
                itemsCategory.get().then(querySnapshot => {
                    const itemsFiltered = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
                    {querySnapshot !==0 && setItems((itemsFiltered), setItemExists(true))}
                })
            }else{
                itemCollection.get().then(querySnapshot => {
                    const allItems = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
                    {querySnapshot !==0 && setItems((allItems), setItemExists(true))}
                })
            }
        }
        getProducts();
    }, [categoryId])
 
    const [animation, setAnimation] = useState({isStopped: false, isPaused: false})
     
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="listaProductos">
            {itemExists ? (
                items.length > 0 ? (items.map ((props) => <Item producto={props} />)
            ) : (
                <p>No tenemos productos para mostrar</p>)
            ) : (
                <Lottie 
                    options={defaultOptions}
                    height={300}
                    width={300}
                    isStopped={animation.isStopped}
                    isPaused={animation.isPaused}
                />
            )}
        </div>
    )
}