export default class Conta {

    private _conta: string
    private _saldo: number
    private _ativo: boolean

    // static numeroDeContas = 0

    constructor(conta: string) {
        this._conta = conta;
        this._saldo = 0;
        this._ativo = true;
        // Conta.numeroDeContas += 1;
    }

    get conta() {
        return this._conta;
    }
    set conta(novaConta) {
        this._conta = novaConta;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(novoSaldo) {
        this._saldo = novoSaldo;
    }

    get ativo() {
        return this._ativo;
    }
    set ativo(booleano) {
        this._ativo = booleano;
    }

    private _diminuirSaldo(valor: number) {
        this.saldo -= valor;
    }

    private _aumentarSaldo(valor: number) {
        this.saldo += valor;
    }

    status() {
        return `Conta: ${this.conta} | Saldo: R$ ${this.saldo} | Status: ${this.ativo}`;
    }

    sacar(valor: number) {
        if(this.saldo >= valor && valor > 0) {
            this._diminuirSaldo(valor);
            console.log(`Sacado: R$ ${valor}`)
        } else {
            console.log(`Error ao sacar!`)
        }
    }

    depositar(valor: number) {
        if(valor > 0) {
            this._aumentarSaldo(valor);
            console.log(`Depositado: R$ ${valor}`)
        } else {
            console.log(`Error ao depositar!`)
        }
    }

    transferir(contaDestino: Conta, valor: number) {
        if(this.saldo >= valor && valor > 0) {
            this._diminuirSaldo(valor);
            contaDestino._aumentarSaldo(valor);
        }
    }

}
