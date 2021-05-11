import {useParams} from "react-router"
import {useEffect, useState} from 'react/cjs/react.development'
import {Productos} from '../products'
import {Link} from 'react-router-dom';
import {Item} from '../item/item'
import './_itemList.scss'
import '../_general.scss'

export const ItemList = () => {

    const {categoryId} = useParams()

    const [items, setItems] = useState([])
    
    useEffect (() => {
        if(!categoryId) {
            setItems(Productos)
        }else{
            let itemsFiltrados = Productos.filter((product) => product.categoryId === categoryId);
            setItems(itemsFiltrados);
        }
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
                {items.length > 0 ? (
                    items.map((props) => <Item producto={props} />)
                ) : (
                <p>No tenemos productos para mostrar</p>)}
            </div>
        </div>
    )
}