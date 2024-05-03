import React from 'react'
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import LogementContent from '../components/logementContent/logementContent';

function Logement() {
    return (
        <>
            <Header />
            <main>
                <LogementContent />
            </main>
            <Footer />
        </>
    )
}

export default Logement;