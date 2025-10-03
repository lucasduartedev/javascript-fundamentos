import Pessoa from "./Pessoa.js";

export default class PessoaFisica extends Pessoa {

    #cpf

    constructor(nome, cpf) {
        super(nome);
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf
    }

    set cpf(novoCpf) {
        this.#cpf = novoCpf;
    }

    apresentar() {
        return `Nome: ${this.nome} | CPF: ${this.cpf}`;
    }

}