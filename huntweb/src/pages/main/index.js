import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';

import "./styles.css";

export default class Main extends Component {
    // variável de estado
    // o estado é sempre um objeto
    // armazena as variáveis que quiser dentro de state
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    //Método é executado assim que a classe é exexutada (construtor)
    componentDidMount(){
        this.loadProducts();
    }

    //carrega os dados na página
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        // preenche a variável com os dados
        this.setState({ products: docs, productInfo, page });
    };

    //Voltar página (anterior)
    prevPage = () => {
        const { page } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    //Próxima Página (Próximo)
    nextPage = () => {
        const { page, productInfo } = this.state;

        // se a pagína atual é igual ao número de páginas
        if( page === productInfo.pages ) return;

        //se não
        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }


    // o método render fica escutando a alteração da variável
    render(){
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages}  onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}