import {ItemList} from '../itemList/itemList'
import './_itemListContainer.scss'

export const ItemListContainer = (props) => {
    return (
        <main>
            <div className="contHome">
                <img src={props.logo} className="logo"></img>
                <ItemList/>
            </div>
        </main>
    )
}