import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo404 from '../../assets/404.png'

function Error() {
    return (
        <section className='error'>
            <img src={Logo404} alt='404 erreur'></img>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to='/accueil'>
                <p>Retourner sur la page d’accueil</p>
            </NavLink>
        </section>
    );
};

export default Error;