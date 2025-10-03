import Pessoa from "./Pessoa.js";

export default class PessoaJuridica extends Pessoa {

    #cnpj

    constructor(nome, cnpj) {
        super(nome);
        this.#cnpj = cnpj;
    }

    get cnpj() {
        return this.#cnpj;
    }

    set cnpj(novoCnpj) {
        this.#cnpj = novoCnpj;
    }

    apresentar() {
        return `Nome: ${this.nome} | CPF: ${this.cnpj}`;;
    }

}

