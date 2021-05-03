import './_itemDetail.scss'

export const ItemDetail = ({props}) => {

    return (
        <div class="cardDetail">
            <img src={props.imagen ? require(`../../img/${props.imagen}`).default: ""}></img>
            <h1>{props.nombre}</h1>
            <p>${props.precio}</p>
            <button>Agegar al carrito</button>
        </div>
    )
}