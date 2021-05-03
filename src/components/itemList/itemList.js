import {useParams} from "react-router"
import {useEffect, useState} from 'react/cjs/react.development'
import {Productos} from '../products'
import {Link} from 'react-router-dom';
import {Item} from '../item/item'
import './_itemList.scss'

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
                <button className="btnKatmandu"><Link to='/category/anillos' className="btnLink">Anillos</Link></button>
                <button className="btnKatmandu"><Link to='/category/collares' className="btnLink">Collares</Link></button>
                <button className="btnKatmandu"><Link to='/category/aros' className="btnLink">Aros</Link></button>
                <button className="btnKatmandu"><Link to='/category/pulseras' className="btnLink">Pulseras</Link></button>
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