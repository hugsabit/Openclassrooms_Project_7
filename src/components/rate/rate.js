import React from 'react';
import startActive from '../../assets/star-active.png';
import startIncative from '../../assets/star-inactive.png'

function Rate({rate}) {
    const ratePossibilities = [1, 2, 3, 4, 5]
    return (
        <div className='rate'>
            {ratePossibilities.map((ratePossibility, i) => rate >= ratePossibility ? <img key={i} src={startActive} alt='Etoile active'></img> : <img key={i} src={startIncative} alt='Etoile inactive'></img>)}
        </div>
    )
}

export default Rate;