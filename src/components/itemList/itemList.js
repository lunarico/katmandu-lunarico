import '../_general.scss'
import './_itemList.scss'
import {AnimationContext} from "../../context/animationContext";
import {getFirestore} from '../../firebase/index'
import {Item} from '../item/item'
import {Link} from 'react-router-dom';
import {useEffect, useState, useContext} from 'react/cjs/react.development'
import {useParams} from "react-router"
import Lottie from 'react-lottie'

export const ItemList = () => {

    const {categoryId} = useParams()
    const [items, setItems] = useState([])
    const [itemExists, setItemExists] = useState(false)
    const {animation, defaultOptions} = useContext(AnimationContext);

    useEffect(() => {
        const getProducts = () => {
            const db = getFirestore();
            const itemCollection = db.collection('items')
            
            if(categoryId){
                const itemsCategory = itemCollection.where('categoryId', '==', categoryId)
                itemsCategory.get().then(querySnapshot => {
                    const itemsFiltered = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
                    querySnapshot !==0 && setItems((itemsFiltered), setItemExists(true))
                })
            }else{
                itemCollection.get().then(querySnapshot => {
                    const allItems = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
                    querySnapshot !==0 && setItems((allItems), setItemExists(true))
                })
            }
        }
        getProducts();
    }, [categoryId])

    return (
        <div className="productList">
            {itemExists ? (
                items.length > 0 ? 
                    (items.map ((props, i) => <Item producto={props} key={i}/>)
                ) : (
                    <div className="noProducts">
                        <p>Disculpanos, en este momento no tenemos estos productos para mostrar</p>
                        <Link to={'/'} className="btnKatmandu">Ver nuestros productos</Link>
                    </div>)
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