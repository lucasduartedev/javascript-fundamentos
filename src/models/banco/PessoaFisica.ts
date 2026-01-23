import Contato from "./Contato.js";

export default class PessoaFisica {

    private _nome: string
    private _cpf: string
    private _contato: Contato

    constructor(nome: string, cpf: string, contato: Contato) {
        this._nome = nome;
        this._cpf = cpf;
        this._contato = contato;
    }

    get nome(): string {
        return this._nome;
    }
    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get cpf(): string {
        return this._cpf;
    }
    set cpf(novoCpf: string) {
        this._cpf = novoCpf;
    }

    get contato(): Contato {
        return this._contato;
    }
    set contato(contato: Contato) {
        this._contato = contato;
    }

}