import React, { useState } from "react";
import VectorLeft from '../../assets/vector_slides_left.png'
import VectorRight from '../../assets/vector_slides_right.png'


function Carrousel({ slides }) {

    const [current, setCurrent] = useState(0);
    
    function previewImage() {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    }
    function nextImage() {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }
    
    return (
        <section className='carrousel'>
            {slides.length > 1 && (
                <img className='vector right' onClick={previewImage} src={VectorRight}>
                </img>
            )}
            {slides.length > 1 && (
                <img className='vector left' onClick={nextImage} src={VectorLeft}>
                </img>
            )}
            {slides.map((image, i) => {
                return (
                    <div key={i} className={i === current ? 'slide active' : 'slide'}>
                        <img src={image} alt='Slide présentation logement'></img>
                        <p className="current">{current + 1}/{slides.length}</p>
                    </div>
                )
            })}
        </section>
    )
}


export default Carrousel;