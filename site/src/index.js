import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalcularAcai from './pages/calculoacai';
import Signo from './pages/signo';
import Sorvete from './pages/ice-cream';
import Salario from './pages/calculosalario';
import Febre from './pages/medirfebre';
import Paradas from './pages/calcularparadas';
import Orcamento from './pages/orcamento';
import Ingresso from './pages/ingresso';
import DeAte from './pages/deate';
import DeAste from './pages/linhadeaste';
import Quadradin from './pages/quadradin';
import Cafe from './pages/querocafeeeee';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={< CalcularAcai />} />
      <Route path="/signo" element={<Signo/>} />
      <Route path="/sorvete" element= {<Sorvete/>} />
      <Route path="/salario" element= {<Salario/>} />
      <Route path="/febre" element= {<Febre/>} />
      <Route path="/paradas" element= {<Paradas/>} />
      <Route path="/orcamento" element= {<Orcamento/>} />
      <Route path="/ingresso" element= {<Ingresso/>} />
      <Route path="/contador" element= {<DeAte/>} />
      <Route path="/linha" element= {<DeAste/>} />
      <Route path="/quadradin" element= {<Quadradin/>} />
      <Route path="/cafe" element= {<Cafe/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


