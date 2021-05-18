import '../_general.scss'
import './_item.scss'
import {Link} from 'react-router-dom';

export const Item = (props) => {
    return (
        <div className="card">
            <img src={props.producto.imagen}></img>
            <h4>{props.producto.nombre}</h4>
            <button className="btnCard"><Link to={`/item/${props.producto.id}`} className="verMasPlus">+</Link></button>
        </div>
    )
}