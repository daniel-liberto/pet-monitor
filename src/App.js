import React from 'react';
import Avaliacao from './Avaliacao.js';
import Flexibilidade from './Flexibilidade.js';
import Footer from './Footer.js';
import LandPage from './LandPage.js';
import Monitoramento from './Monitoramento.js';
import Navbar from './Navbar.js';
import initAnimacaoScroll from './script/simple-anime.js';

function App() {
  React.useEffect(() => {
    initAnimacaoScroll();
  }, []);
  return (
    <div>
      <Navbar />
      <LandPage />
      <Flexibilidade />
      <Monitoramento />
      <Avaliacao />
      <Footer />
    </div>
  );
}

export default App;
