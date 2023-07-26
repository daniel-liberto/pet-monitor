import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandPage from './pages/index/LandPage.jsx';
import Flexibilidade from './pages/index/Flexibilidade.jsx';
import Monitoramento from './pages/index/Monitoramento.jsx';
import Avaliacao from './pages/index/Avaliacao.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import initAnimacaoScroll from './script/simple-anime.js';
import Info from './pages/info/Info.jsx';
import ScrollToTop from './script/ScrollToTop.js';
import Sobre from './pages/sobre/Sobre.jsx';
import Contato from './pages/contato/Contato.jsx';
import Login from './pages/login/Login.jsx';
import { UserStorage } from './UserContext.jsx';
import BtnToTop from './BtnToTop.jsx';

function App() {
  React.useEffect(() => {
    initAnimacaoScroll();
  }, []);
  return (
    <>
      <BrowserRouter>
        <UserStorage>
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
            <Route path="pet-monitor/info" element={<Info />} />
            <Route path="pet-monitor/sobre" element={<Sobre />} />
            <Route path="pet-monitor/contato" element={<Contato />} />
            <Route path="pet-monitor/login/*" element={<Login />} />
          </Routes>
          <Route path="/pet-monitor" element={<BtnToTop />} />
          <Route path="/pet-monitor" element={<Footer />} />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
