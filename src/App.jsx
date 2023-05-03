import React from 'react';
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Whatsapp from './components/whatsapp';
import Home from './components/home';
import Testimonios from './components/testimonios';
import ClientesAso from './components/clientesAso';
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




function App() {
  return (
    <div className="App">



      <Router basename="/seguro" >
        <Navbar />
        <Whatsapp />

        <Routes>
          <Route path="/seguro" element={<>
            <Home />
            <Quienes />
            <Testimonios />
            <ClientesAso />
            <Cultura />
            <Services />
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
      </Router>

    </div>
  );
}

export default App;

