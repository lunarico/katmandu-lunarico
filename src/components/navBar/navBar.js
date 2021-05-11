import './_navBar.scss'
import {CartContext} from '../../context/cartContext';
import {CartWidget} from '../cartWidget/cartWidget'
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {useContext} from 'react'

export const Navbar = () => {

    const {quantityCount} = useContext(CartContext)

    return (
        <header>
            <nav>
                <h1><Link to = '/' className="logo">Katmandú</Link></h1>
                <ul>
                    <li><NavLink to='/productos' activeClassName="activeLink" className="navLink">Productos</NavLink></li>
                    <li><NavLink to='/miTalle' activeClassName="activeLink" className="navLink">Mi talle</NavLink></li>
                    <li><NavLink to='/envios' activeClassName="activeLink" className="navLink">Envíos</NavLink></li>
                    <li><NavLink to='/contacto' activeClassName="activeLink" className="navLink">Contacto</NavLink></li>
                    <li><NavLink to='/cart' activeClassName="activeLink" className="navLink shopping"><CartWidget />
                    <p className="quantity">{quantityCount()}</p>
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}