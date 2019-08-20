const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
//permitir que envie dados para a aplicação no formato de JSON
app.use(express.json());
// Permite que outros endereços acessem a nossa api
app.use(cors());

//Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

// Configurando base_url para "api" e pegando as rotas
app.use('/api', require("./src/routes"));


app.listen(3001);