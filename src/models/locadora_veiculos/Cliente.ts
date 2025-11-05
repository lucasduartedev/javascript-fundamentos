
export default class Cliente {

    private _id: number;
    private _nome: string;
    private _cpf: string;
    private _email: string;

    constructor(id: number, nome: string, cpf: string, email: string) {
        this._id = id;
        this._nome = nome;
        this._cpf = cpf;
        this._email = email;
    }

    get id(): number {
        return this._id;
    }
    set id(novoId: number) {
        this._id = novoId;
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

    get email(): string {
        return this._email;
    }
    set email(novoEmail: string) {
        this._email = novoEmail;
    }

}
