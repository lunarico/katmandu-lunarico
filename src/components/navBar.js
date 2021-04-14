import React from 'react';
import '../css/navBar.css';

const NavBar = () => {
    return (
        <div >
            <header>
                <h1 className="logo">Katmandú</h1>
                <nav>
                    <ul>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Envíos</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Carrito</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
 }

 export default NavBar;