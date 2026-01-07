import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Investigacion from './pages/practices/Investigacion';
import Practica1 from './pages/practices/Practica1';
import Practica2 from './pages/practices/Practica2';
import EscaneoResina from './pages/practices/EscaneoResina';
import CorteLaser from './pages/practices/CorteLaser';
import ExamenInterciclo from './pages/practices/ExamenInterciclo';
import ProyectoFinal from './pages/practices/ProyectoFinal';

import CustomCursor from './components/CustomCursor';

function App() {
  const location = useLocation();

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/practice/investigacion" element={<Investigacion />} />
          <Route path="/practice/practica1" element={<Practica1 />} />
          <Route path="/practice/practica2" element={<Practica2 />} />
          <Route path="/practice/practicascaner" element={<EscaneoResina />} />
          <Route path="/practice/practicacortelaser" element={<CorteLaser />} />
          <Route path="/practice/examen" element={<ExamenInterciclo />} />
          <Route path="/practice/proyectofinal" element={<ProyectoFinal />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
