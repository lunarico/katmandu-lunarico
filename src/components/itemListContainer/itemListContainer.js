import './_itemListContainer.scss'
import {ItemList} from '../itemList/itemList'

export const ItemListContainer = (props) => {
    return (
        <div>
            <div className="contLogo">
                <img src={props.logo} className="logo"></img>
            </div>
            <ItemList/>
        </div>
    )
}
/*export const ItemListContainer = (props) => {

    const [listaJoyas, setListaJoyas] = useState([''])

    const listaAnillos = async () => {
        try{
            setTimeout (() => {
                setListaJoyas(ItemList)}, 2000)
        }catch{
            setListaJoyas('Disculpanos, en este momento tenemos problemas de conexión')
        }
    }
     
    return (
        <div>
            <div className="contLogo">
                <img src={props.logo} className="logo"></img>
            </div>
            <div className="btnProductos">
                <button onClick={listaAnillos} className="btnKatmandu cut">Anillos</button>
                <button className="btnKatmandu cut">Collares</button>
                <button className="btnKatmandu cut">Aros</button>
                <button className="btnKatmandu cut">Pulseras</button>
            </div>
            {listaJoyas}
        </div>
    )
}*/