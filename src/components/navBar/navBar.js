import './_navBar.scss'
import {CartWidget} from '../cartWidget/cartWidget'

export const Navbar = () => {
    return (
        <div >
            <header>
                <h1 className="logo">Katmandú</h1>
                <nav>
                    <ul>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Mi Talle</a></li>
                        <li><a href="">Envíos</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="" className ="shopping"><CartWidget/></a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}