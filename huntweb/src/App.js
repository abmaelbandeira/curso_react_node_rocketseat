import React from 'react';
import Routes from './routes';

import './styles.css';

//Component - entender como um pedaço de lógica, estrutura e estilização

//importando o component header
import Header from './components/Header';
//importando o corpo da página
import Main from './pages/main';

const App = () => (
  <div className="App">
      <Header />
      <Routes />
    </div>
);

export default App;
