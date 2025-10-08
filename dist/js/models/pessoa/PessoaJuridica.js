import Pessoa from "./Pessoa.js";
export default class PessoaJuridica extends Pessoa {
    _cnpj;
    constructor(nome, cnpj) {
        super(nome);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    set cnpj(novoCnpj) {
        this._cnpj = novoCnpj;
    }
    apresentar() {
        return `Nome: ${this.nome} | CNPJ: ${this.cnpj}`;
    }
}
