import './_navBar.scss'
import {CartWidget} from '../cartWidget/cartWidget'
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div class="header">
            <nav>
                <h1><Link to = '/' className="logo">Katmandú</Link></h1>
                <ul>
                    <li><NavLink to='/productos' activeClassName="activeLink" className="navLink">Productos</NavLink></li>
                    <li><NavLink to='/miTalle' activeClassName="activeLink" className="navLink">Mi talle</NavLink></li>
                    <li><NavLink to='/envios' activeClassName="activeLink" className="navLink">Envíos</NavLink></li>
                    <li><NavLink to='/contacto' activeClassName="activeLink" className="navLink">Contacto</NavLink></li>
                    <li><NavLink to='/carrito' activeClassName="activeLink" className="navLink shopping"><CartWidget /></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}