/* eslint-disable jsx-a11y/anchor-is-valid */

import Logo from '../assets/img/logo.png'
import '../assets/css/master.css'

function Header(){
    return (
        <header className="encabezado">
            <nav id="logo">
                <a href="#"><img src={Logo} alt="Logo"/></a>
            </nav>
        <nav id="opciones">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
        </nav>
        </header>
    );
}

export default Header;