const mongoose = require('mongoose');

const Product = mongoose.model('Product');

//exportando a função
module.exports = {
    // Listagem dos produtos
    async index(req, res){
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        //retornando em formato de json
        return res.json(products);
    },

    // Retorna um produto
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // Salva no BD
    async store(req, res){
        // Criação
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // Atualizar 
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); //com o new retorna o título atualizado

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }

};