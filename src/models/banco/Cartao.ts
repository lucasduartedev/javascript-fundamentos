import Compra from "./Compra.js";

export default class Cartao {

    private _id: number;
    private _numeracao: string;
    private _codigo: string;
    private _limite: number = 1000.0;
    private _compras: Array<Compra> = [];
    private _ativo: boolean = false;

    constructor(
        id: number,
        numeracao: string,
        codigo: string
    ) {
        this._id = id;
        this._numeracao = numeracao;
        this._codigo = codigo;
    }

    get id(): number {
        return this._id;
    }
    set id(novoId: number) {
        this._id = novoId;
    }

    get numeracao(): string {
        return this._numeracao;
    }
    set numeracao(novaNumeracao: string) {
        this._numeracao = novaNumeracao;
    }
    
    get codigo(): string {
        return this._codigo;
    }
    set codigo(novoCodigo: string) {
        this._codigo = novoCodigo;
    }
    
    get limite(): number {
        return this._limite;
    }
    set limite(novoLimite: number) {
        this._limite = novoLimite;
    }

    get compras(): Compra[] {
        return this._compras;
    }
    set compras(novaCompra: Compra[]) {
        this._compras = novaCompra;
    }

    get ativo(): boolean {
        return this._ativo;
    }
    set ativo(novoAtivo: boolean) {
        this._ativo = novoAtivo;
    }

    desativarCartao() {
        if(this._ativo == false) {
            throw new Error('O cartão já está desativado');
        }
        this._ativo = false;
    }
    
    ativarCartao() {
        if(this._ativo == true) {
            throw new Error('O cartão já está ativado');
        }
        this._ativo = true;
    }

    validarCompra(compra: Compra) {
        if(this._ativo == false) {
            throw new Error('Cartão desativado!');
        }
        
    }

}
