import React from 'react';

function Thumb({image, text}) {
    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <article className={`thumb ${image ? 'thumb-bg-img' : ''}`} style={style}>
            <p>{text}</p>
        </article>
    );
};

export default Thumb;