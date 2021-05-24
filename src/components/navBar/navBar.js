import './_navBar.scss'
import {CartContext} from '../../context/cartContext';
import {CartWidget} from '../cartWidget/cartWidget'
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {useContext} from 'react'

export const Navbar = () => {

    const {cart} = useContext(CartContext)

    return (
        <header>
            <nav>
                <h1><Link to ='/' className="logo">Katmandú</Link></h1>
                <ul>
                    <li><NavLink to='/category/anillos' activeClassName="activeLink" className="navLink">Anillos</NavLink></li>
                    <li><NavLink to='/category/collares' activeClassName="activeLink" className="navLink">Collares</NavLink></li>
                    <li><NavLink to='/category/aros' activeClassName="activeLink" className="navLink">Aros</NavLink></li>
                    <li><NavLink to='/category/pulseras' activeClassName="activeLink" className="navLink">Pulseras</NavLink></li>
                    {cart.length > 0 && 
                    <li><NavLink to='/cart' activeClassName="activeLink" className="navLink shopping">
                            <CartWidget />
                        </NavLink>
                    </li>}
                </ul>
            </nav>
        </header>
    )
}