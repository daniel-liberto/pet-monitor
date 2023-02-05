import React from 'react';
import Avaliacao from './Avaliacao.js';
import Flexibilidade from './Flexibilidade.js';
import LandPage from './LandPage.js';
import Monitoramento from './Monitoramento.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div>
      <Navbar />
      <LandPage />
      <Flexibilidade />
      <Monitoramento />
      <Avaliacao />
    </div>
  );
}

export default App;
