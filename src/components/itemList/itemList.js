import '../_general.scss'
import './_itemList.scss'
import {getFirestore} from '../../firebase/index'
import {Item} from '../item/item'
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react/cjs/react.development'
import {useParams} from "react-router"

export const ItemList = () => {

    const {categoryId} = useParams()
    const [items, setItems] = useState([])
    const [itemExists, setItemExists] = useState(true)
 
    useEffect (() => {
        setItemExists(true)
        setItems([])
        const db = getFirestore()
        const itemCollection = db.collection("items")
        const itemCategory = itemCollection.where('categoryId', '==', 'anillos')
        itemCategory.get().then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setItems(data)
       
        }).finally(() => {
            setTimeout(() => {
                setItemExists(false)

            }, 3000)
        })
    }, [categoryId])

    return (
        <div>
            <div className="btnProductos">
                <Link to='/category/anillos'><p className="btnKatmandu">Anillos</p></Link>
                <Link to='/category/collares'><p className="btnKatmandu">Collares</p></Link>
                <Link to='/category/aros'><p className="btnKatmandu">Aros</p></Link>
                <Link to='/category/pulseras'><p className="btnKatmandu">Pulseras</p></Link>
            </div>
            <div className="listaProductos">
                {itemExists ? (items.map ((props) => <Item producto={props} />)
                ) : (
                <p>No tenemos productos para mostrar</p>
                ) }
            </div>
        </div>
    )
}

/*{items.length > 0 ? (
    items.map((props) => <Item producto={props} />)
) : (
    <p>No tenemos productos para mostrar</p>)}*/