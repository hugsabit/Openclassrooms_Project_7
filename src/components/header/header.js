import React from 'react';
import Logo from '../../assets/logo.png';
import Nav from '../nav/nav';

function Header() {
    return (
        <header className="header">
            <img src={Logo} alt='Logo de Kasa' />
            <Nav />
        </header>
    )
};

export default Header;