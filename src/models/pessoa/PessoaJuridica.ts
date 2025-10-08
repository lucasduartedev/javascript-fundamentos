import Pessoa from "./Pessoa.js";

export default class PessoaJuridica extends Pessoa {

    private _cnpj: string

    constructor(nome: string, cnpj: string) {
        super(nome);
        this._cnpj = cnpj;
    }

    get cnpj() {
        return this._cnpj;
    }

    set cnpj(novoCnpj: string) {
        this._cnpj = novoCnpj;
    }

    apresentar() {
        return `Nome: ${this.nome} | CNPJ: ${this.cnpj}`;
    }

}

