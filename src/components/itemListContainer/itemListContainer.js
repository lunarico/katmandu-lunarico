import './_itemListContainer.scss'
import "aos/dist/aos.css"
import {ItemList} from '../itemList/itemList'
import {useEffect} from "react";
import AOS from 'aos'

export const ItemListContainer = (props) => {

    useEffect(() => {AOS.init({duration : 2000});}, [])

    return (
        <main>
            <div className="contHome">
                <img src={props.logo} data-aos={"flip-left"} className="logo"></img>
                <ItemList/>
            </div>
        </main>
    )
}