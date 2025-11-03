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

    // * Métodos privados
    private _diminuirSaldo(valor: number) {
        this._saldo -= valor;
    }
    private _aumentarSaldo(valor: number) {
        this._saldo += valor;
    }

    // * Métodos
    desativar() {
        if(this._ativo == false) {
            throw new Error('A conta já está desativada.');
        }
        this._ativo = false;
    }
    ativar() {
        if(this._ativo == true) {
            throw new Error('A conta já está ativada.');
        }
        this._ativo = true;
    }

    alterarNomeConta(novaConta: string) {
        if(this.conta == novaConta) {
            throw new Error('Não pode alterar nome para o mesmo nome já cadastrado.');
        } else if(novaConta.length < 4) {
            throw new Error('Novo nome deve ter no mínimo 4 digitos.');
        } else {
            this.conta = novaConta;
        }
    }

    status(): string {
        let saldoStatus = this._saldo >= 0 ? 'Positivo' : 'Negativo';
        return `Conta: ${this.conta} | Saldo: ${saldoStatus} | Status: ${this.ativo}`;
    }

    depositar(valor: number) {
        if(this._ativo == false) {
            throw new Error('Conta desativada não pode receber deposito.');
        } else if(valor <= 0) {
            throw new Error('Valor do depósito deve ser maior que zero (0).');
        } else {
            this._aumentarSaldo(valor);
        }
    }

    sacar(valor: number) {
        if(this.ativo == false) {
            throw new Error('Conta desativada não pode realizar saque.');
        } else if(valor <= 0) {
            throw new Error('Valor do saque deve ser maior que zero (0).');
        } else if(valor <= this._saldo){
            this._diminuirSaldo(valor);
        }
    }
    
    transferir(contaDestino: Conta, valor: number) {
        if(this.ativo == false) {
            throw new Error('Conta desativada não pode realizar transferência.');
        } else if(contaDestino.ativo == false) {
            throw new Error('Conta destino desativada não pode receber valores.');
        } else if(valor <= 0) {
            throw new Error('Valor da transferência deve ser maior que zero (0).');
        } else if(this._saldo >= valor) {
            this._diminuirSaldo(valor);
            contaDestino._aumentarSaldo(valor);
        }
    }

}
