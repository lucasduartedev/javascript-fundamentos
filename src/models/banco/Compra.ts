export default class Compra {

    private _valor: number;
    private _dataCompra: Date;
    private _descricao: string;

    constructor(valor: number, dataCompra: Date, descricao: string) {
        this._valor = valor;
        this._dataCompra = dataCompra;
        this._descricao = descricao;
    }

    get valor(): number {
        return this._valor;
    }
    set valor(novoValor: number) {
        this._valor = novoValor;
    }

    get dataCompra(): Date {
        return this._dataCompra;
    }
    set dataCompra(novaData: Date) {
        this._dataCompra = novaData;
    }
    
    get descricao(): string {
        return this._descricao;
    }
    set descricao(novaDescricao: string) {
        this._descricao = novaDescricao;
    }
    
}
