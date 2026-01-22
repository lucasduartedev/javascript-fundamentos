export default class PessoaFisica {

    // * Atribuir essa classe em conta

    private _nome: string
    private _cpf: string
    // Definir class contato

    constructor(nome: string, cpf: string) {
        this._nome = nome;
        this._cpf = cpf;
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

}