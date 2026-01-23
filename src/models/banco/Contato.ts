export default class Contato {

    private _celular: string
    private _email: string

    constructor(celular: string, email: string) {
        this._celular = celular;
        this._email = email;
    }

    get celular(): string {
        return this._celular;
    }
    set celular(novoCelular: string) {
        this._celular = novoCelular;
    }

    get email(): string {
        return this._email;
    }
    set email(novoEmail: string) {
        this._email = novoEmail;
    }

}