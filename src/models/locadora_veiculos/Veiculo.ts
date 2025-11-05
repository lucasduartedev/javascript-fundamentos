
export default class Veiculo {

    private _id: number;
    private _nome: string;
    private _numeroPortas: number;
    private _disponivel: boolean;
    private _precoDiaria: number;

    constructor(id: number, nome: string, numeroPortas: number, disponivel: boolean, precoDiaria: number) {
        this._id = id;
        this._nome = nome;
        this._numeroPortas = numeroPortas;
        this._disponivel = disponivel;
        this._precoDiaria = precoDiaria;
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

    get numeroPortas(): number {
        return this._numeroPortas;
    }
    set numeroPortas(novoNumeroPortas: number) {
        this._numeroPortas = novoNumeroPortas;
    }

    get disponivel(): boolean {
        return this._disponivel;
    }
    set disponivel(disponivel: boolean) {
        this._disponivel = disponivel;
    }

    get precoDiaria(): number {
        return this._precoDiaria;
    }
    set precoDiaria(precoDiaria: number) {
        this._precoDiaria = precoDiaria;
    }

}
