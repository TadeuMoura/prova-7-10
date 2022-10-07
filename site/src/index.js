import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CalcularAcai from './pages/calculoacai';
import Signo from './pages/signo'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={< CalcularAcai />} />
      <Route path="/signo" element={<Signo/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


