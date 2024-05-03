import React from 'react'
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Banner from '../components/banner/banner';
import bannerImage from "../assets/background_mountain.png";
import Dropdown from '../components/dropdown/dropdown';

function Apropos() {
    return (
        <>
            <Header />
            <main className='main-apropos'>
                <Banner image={bannerImage} />
                <section className='dropdown-section'>
                    <Dropdown title={'Fiabilité'} content={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'} size={'large'}/>
                    <Dropdown title={'Respect'} content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'} size={'large'}/>
                    <Dropdown title={'Service'} content={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."} size={'large'}/>
                    <Dropdown title={'Sécurité'} content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} size={'large'}/>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Apropos;