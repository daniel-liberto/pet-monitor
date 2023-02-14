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

function App() {
  React.useEffect(() => {
    initAnimacaoScroll();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Route path="/" element={<Navbar />} />
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
        </Routes>
        <Route path="/" element={<Footer />} />
      </BrowserRouter>
    </>
  );
}

export default App;
