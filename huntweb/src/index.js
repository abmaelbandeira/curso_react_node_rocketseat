
//É aqui que inicia toda a aplicação
//Primeiro arquivo aberto pela aplicação React

// import para utilizar sintaxe do html (jsx)
import React from 'react';
import ReactDOM from 'react-dom';


//importando o App.js
import App from './App';
import * as serviceWorker from './serviceWorker';


//Função que executa apenas uma única vez em toda a aplicação
// Renderiza o primero componente que é o App
//coloca o App dentro de uma div lá no html chamada root
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
