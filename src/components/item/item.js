import './_item.scss'
import {Link} from 'react-router-dom';

export const Item = (props) => {
    return (
        <div className="card">
            <img src={require(`../../img/${props.producto.imagen}`).default}></img>
            <h4>{props.producto.nombre}</h4>
            <button className="verMas"><Link to={`/item/${props.producto.id}`} className="verMasPlus">+</Link></button>
        </div>
    )
}