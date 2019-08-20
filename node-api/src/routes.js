const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Rotas

// Rota de Listagem dos produtos
routes.get('/products', ProductController.index);
// Rota de retorno de um produto
routes.get('/products/:id', ProductController.show);
// Rota de armazenamento de um produto
routes.post('/products', ProductController.store);
// Rota de atualização utiliza-se o método put
routes.put('/products/:id', ProductController.update);
// Rota que deleta um produto do DB
routes.delete('/products/:id', ProductController.destroy);

 module.exports = routes;