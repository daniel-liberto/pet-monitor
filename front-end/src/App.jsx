import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Avaliacao from './Avaliacao.jsx';
import Flexibilidade from './Flexibilidade.jsx';
import Footer from './Footer.jsx';
import LandPage from './LandPage.jsx';
import Monitoramento from './Monitoramento.jsx';
import Navbar from './Navbar.jsx';
import initAnimacaoScroll from './script/simple-anime.js';
import Info from './pages/info/Info.jsx';
import ScrollToTop from './script/ScrollToTop.js';
import Sobre from './pages/sobre/Sobre.jsx';
import Contato from './pages/contato/Contato.jsx';
import Login from './pages/login/Login.jsx';

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
          <Route path="contato" element={<Contato />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Route path="/" element={<Footer />} />
      </BrowserRouter>
    </>
  );
}

export default App;
