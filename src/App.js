import React from 'react';
import Avaliacao from './Avaliacao.js';
import Flexibilidade from './Flexibilidade.js';
import Footer from './Footer.js';
import LandPage from './LandPage.js';
import Monitoramento from './Monitoramento.js';
import Navbar from './Navbar.js';
import initAnimacaoScroll from './script/simple-anime.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Info from './info/Info.js';
import ScrollToTop from './script/ScrollToTop.js';
import Sobre from './sobre/Sobre.js';

function App() {
  React.useEffect(() => {
    initAnimacaoScroll();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Route path="/" element={<Navbar />} />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
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
        </Routes>
        <Route path="/" element={<Footer />} />
      </BrowserRouter>
    </>
  );
}

export default App;
