import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Whatsapp from './components/whatsapp';
import Home from './components/home';
import Testimonios from './components/testimonios';
import Clientes from './components/clientes';
import Cultura from './components/cultura';
import Services from './components/services';
import Formulario from './components/formulario';
import Cambio from './components/cambio';
import Footer from './components/footer';
import Individual from './components/individual';
import Pymes from './components/pymes';
import Corporativo from './components/corporativo';
import Vehiculos from './components/vehiculos';
import AsistMedica from './components/asistMedica';
import AccidentesPersonales from './components/accidentesPersonales';
import Viajes from './components/viajes';
import Hogar from './components/hogar';
import Innovadores from './components/innovadores';
import Fianzas from './components/fianzas';
import Quienes from './components/quienes';
import Socios from './components/socios';
import Vida from './components/vida';




function App() {
  return (
    <div className="App">

        <Navbar />
        <Whatsapp />

        <Routes>
          <Route path="/" element={<>
            <Home />
            <Quienes />
            <Testimonios />
            <Socios />
            <Cultura />
            <Services />
            <Clientes />
          </>} />
          <Route path="/individuales" element={<>
            <Individual />
          </>} />
          <Route path="/pymes" element={<>
            <Pymes />
          </>} />
          <Route path="/corporativo" element={<>
            <Corporativo />
          </>} />
          <Route path="/vehiculo" element={<>
            <Vehiculos />
          </>} />
          <Route path="/atencionmedica" element={<>
            <AsistMedica />
          </>} />
          <Route path="/accidentespersonales" element={<>
            <AccidentesPersonales />
          </>} />
          <Route path="/vida" element={<>
            <Vida />
          </>} />
          <Route path="/viajes" element={<>
            <Viajes />
          </>} />
          <Route path="/hogar" element={<>
            <Hogar />
          </>} />
          <Route path="/innovadores" element={<>
            <Innovadores />
          </>} />
          <Route path="/fianzas" element={<>
            <Fianzas />
          </>} />
        </Routes>
        <Formulario />
        <Cambio />
        <Footer />

    </div>
  );
}

export default App;

