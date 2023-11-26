import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                {/* le path "*" Renvoi a la page souhaitez si non declarer ou Erreur 404 */}
                <Route path="*" element={<Home />} />


            </Routes>
        </BrowserRouter>
    );
};

export default App;