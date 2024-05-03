import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation();
    
    return (
        <ul className='nav'>
            <NavLink to='/accueil' className={location.pathname === '/accueil' ? 'active' : ''} >
                <li>Accueil</li>
            </NavLink>
            <NavLink to='/apropos' className={location.pathname === '/apropos' ? 'active' : ''} >
                <li>A propos</li>
            </NavLink>
        </ul>
    );
};

export default Nav;