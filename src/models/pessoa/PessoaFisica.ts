import Pessoa from "./Pessoa.js";

export default class PessoaFisica extends Pessoa {

    private _cpf: string

    constructor(nome: string, cpf: string) {
        super(nome);
        this._cpf = cpf;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(novoCpf: string) {
        this._cpf = novoCpf;
    }

    apresentar() {
        return `Nome: ${this.nome} | CPF: ${this.cpf}`;
    }

}