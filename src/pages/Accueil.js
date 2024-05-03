import React from 'react'
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Banner from '../components/banner/banner';
import bannerImage from "../assets/background_sea-mountain.png";
import Gallery from '../components/gallery/gallery';

function Accueil() {
    const textBanner = "Chez vous, partout et ailleurs"
    return (
        <>
            <Header />
            <Banner image={bannerImage} text={textBanner} />
            <Gallery />
            <Footer />
        </>
    )
}

export default Accueil;