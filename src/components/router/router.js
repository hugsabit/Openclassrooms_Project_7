import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Accueil from '../../pages/Accueil';
import Apropos from '../../pages/Apropos';
import Logement from '../../pages/Logement';
import Erreur from '../../pages/Erreur';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to='/accueil'/>} />
                <Route path="/accueil" element={<Accueil />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Erreur />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;