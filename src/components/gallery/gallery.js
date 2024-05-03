import React from 'react';
import { Link } from 'react-router-dom';
import Thumb from '../thumb/thumb';
import logements from '../../data/logements.json'

function Gallery() {
    
    return (
        <div className='gallery'>
            {logements.map(logement => {
                return (
                    <article key={logement.id}>
                        <Link to={`/logement/${logement.id}`}>
                            <Thumb image={logement.cover} text={logement.title}></Thumb>
                        </Link>
                    </article>
                );
            })}
        </div>
    );
};

export default Gallery;