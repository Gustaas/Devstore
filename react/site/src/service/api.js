import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3030/'
})

export default class Api {
    async listar() {
        let r = await api.get('/produto');
        return r.data;
    }

    async inserir(nome, categoria, precode, precopor, avaliacao, descricao, qtdestoque, imagem ) {
        let r = await api.post(`/produto`, { nome, categoria, precode, precopor, avaliacao, descricao, qtdestoque, imagem });
        return r.data;
        
    }

    async alterando(id, nome, categoria, precode, precopor, avaliacao, descricao, qtdestoque, imagem ) {
        let r = await api.put(`/produto/${id}`, { nome, categoria, precode, precopor, avaliacao, descricao, qtdestoque, imagem });
        return r.data;
    }

    async remover(id) {
        let r = await api.delete(`/produto/${id}`);
        return r.data;
    }
}