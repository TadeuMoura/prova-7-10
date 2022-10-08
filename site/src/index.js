import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalcularAcai from './pages/calculoacai';
import Signo from './pages/signo';
import Sorvete from './pages/ice-cream'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={< CalcularAcai />} />
      <Route path="/signo" element={<Signo/>} />
      <Route path="sorvete" element= {<Sorvete/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


