import React from 'react';
import Logo from '../../assets/logo.png';

function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt='Logo de Kasa' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer;