import './_item.scss'

export const Item = (props) => {
    return (
        <div className="item">
            <img src={require(`../../img/${props.producto.imagen}`).default}></img>
            <h4>{props.producto.nombre}</h4>
            <p>${props.producto.precio}</p>
        </div>
    )
}

/*export const Item = (props) => {
    return (
        <div className="producto">
            <img src={require(`../../img/anillos/${props.props.imagen}`).default} 
                alt={props.props.nombre}>
            </img>
            <h4>{props.props.nombre}</h4>
            <p>${props.props.precio}</p>
        </div>
    )
} */