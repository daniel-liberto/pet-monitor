import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Avaliacao from './Avaliacao.js';
import Flexibilidade from './Flexibilidade.js';
import Footer from './Footer.js';
import LandPage from './LandPage.js';
import Monitoramento from './Monitoramento.js';
import Navbar from './Navbar.js';
import initAnimacaoScroll from './script/simple-anime.js';
import Info from './info/Info.js';
import ScrollToTop from './script/ScrollToTop.js';
import Sobre from './sobre/Sobre.js';
import Contato from './contato/Contato.js';
import Login from './login/Login.js';

function App() {
  React.useEffect(() => {
    initAnimacaoScroll();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Route path="/pet-monitor" element={<Navbar />} />
        <ScrollToTop />
        <Routes>
          <Route
            path="/pet-monitor"
            element={
              <>
                <LandPage />
                <Flexibilidade />
                <Monitoramento />
                <Avaliacao />
              </>
            }
          />
          <Route path="info" element={<Info />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Route path="/pet-monitor" element={<Footer />} />
      </BrowserRouter>
    </>
  );
}

export default App;
