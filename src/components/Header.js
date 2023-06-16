import React from 'react';
import '../styles/Header.css';
import menu from '../img/menu.png';
import foto from '../img/perfil.jpg';

function Header() {

    return (
        <div className="header">
            <ul>
                <li><a href="https://www.gmail.com">Gmail</a></li>
                <li><a href="https://www.googlemaps.com">Maps</a></li>
                <li><img className='header-menu' src={menu} alt="Menu interativo" /></li>
                <li><img className='header-foto' src={foto} alt="Imagem de perfil" /></li>
            </ul>
        </div>
     );
}

export default Header;