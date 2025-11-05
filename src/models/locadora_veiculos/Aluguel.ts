
export default class Aluguel {

    private _id: number;
    private _idCliente: number;
    private _idCarro: number;
    private _dataIncio: Date;
    private _dataFinal: Date;

    constructor(id: number, idCliente: number, idCarro: number, dataInicio: Date, dataFinal: Date) {
        this._id = id;
        this._idCliente = idCliente;
        this._idCarro = idCarro;
        this._dataIncio = dataInicio;
        this._dataFinal = dataFinal;
    }

    get id(): number {
        return this._id;
    }
    set id(novoId: number) {
        this._id = novoId;
    }

    get idCiente(): number {
        return this._idCliente;
    }
    set idCiente(novoIdCliente: number) {
        this._idCliente = novoIdCliente;
    }

    get idCarro(): number {
        return this._idCarro;
    }
    set idCarro(novoIdCarro: number) {
        this._idCarro = novoIdCarro;
    }

    get dataInicio(): Date {
        return this._dataIncio;
    }
    set dataInicio(novaDataInicio: Date) {
        this._dataIncio = novaDataInicio;
    }

    get dataDinal(): Date {
        return this._dataFinal;
    }
    set dataDinal(novaDataDinal: Date) {
        this._dataFinal = novaDataDinal;
    }

}
