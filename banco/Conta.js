export default class Conta {

    #conta
    #saldo
    #ativo

    constructor(conta) {
        this.#conta = conta;
        this.#saldo = 0;
        this.#ativo = true;
    }

    get conta() {
        return this.#conta;
    }
    set conta(novaConta) {
        this.#conta = novaConta;
    }

    get saldo() {
        return this.#saldo;
    }
    set saldo(novoSaldo) {
        this.#saldo = novoSaldo;
    }

    get ativo() {
        return this.#ativo;
    }
    set ativo(booleano) {
        this.#ativo = booleano;
    }

    #diminuirSaldo(valor) {
        this.saldo -= valor;
    }

    #aumentarSaldo(valor) {
        this.saldo += valor;
    }

    status() {
        return `Conta: ${this.conta} | Saldo: R$ ${this.saldo} | Status: ${this.ativo}`;
    }

    sacar(valor) {
        if(this.saldo >= valor && valor > 0) {
            this.#diminuirSaldo(valor);
            console.log(`Sacado: R$ ${valor}`)
        } else {
            console.log(`Error ao sacar!`)
        }
    }
    
    depositar(valor) {
        if(valor > 0) {
            this.#aumentarSaldo(valor);
            console.log(`Depositado: R$ ${valor}`)
        } else {
            console.log(`Error ao depositar!`)
        }
    }

    transferir(Conta, valor) {
        if(this.saldo >= valor && valor > 0) {
            this.#diminuirSaldo(valor);
            Conta.saldo = valor;
        }
    }

}