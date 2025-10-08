import Pessoa from "./Pessoa.js";
export default class PessoaFisica extends Pessoa {
    _cpf;
    constructor(nome, cpf) {
        super(nome);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(novoCpf) {
        this._cpf = novoCpf;
    }
    apresentar() {
        return `Nome: ${this.nome} | CPF: ${this.cpf}`;
    }
}
