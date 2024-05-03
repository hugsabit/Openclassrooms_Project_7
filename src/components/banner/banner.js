import React from 'react';

function Banner({image, text}) {
    const bannerStyle = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${image})` };
    if (text) {
        return (
            <section className="banner" style={bannerStyle}>
                <p>{text}</p>
            </section>
        );
    } else {
        return (
            <section className="banner" style={bannerStyle}>
            </section>
        );
    };
};

export default Banner;