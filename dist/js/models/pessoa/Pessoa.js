export default class Pessoa {
    _nome;
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
}
