import React, { useState } from "react";
import LogoChevron from '../../assets/vector_chevron.png';

function Dropdown({title, content, size}) {

    const [isOpen, setIsOpen] = useState(false);
    const display = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown ${size === 'large' ? 'large' : ''}`}>
            <div className='title' onClick={display}>
                <h1>{title}</h1>
                {isOpen ? (<img src={LogoChevron} alt="logo status d'affichage" className="vector-chevron-up"></img>) : (<img src={LogoChevron} alt="logo status d'affichage" className=""></img>)}
            </div>
            <div className={`content ${isOpen ? 'content-show' : ''}`}>{content}</div>
        </div>
    );
};

export default Dropdown;