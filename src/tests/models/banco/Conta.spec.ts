import Conta from "../../../models/banco/Conta"
import {log, error} from "console"

describe('Suite - Banco', () => {

    // * Conta
    const conta01 = new Conta('0001');
    const contaDesativada = new Conta('desativada_01');
    contaDesativada.depositar(1000);
    contaDesativada.desativar();

    test('Deve instanciar uma conta nova com saldo igual a zero (0).', () => {
        expect(conta01.saldo).toEqual(0);
    });
    
    test('Deve instanciar uma conta nova com status ativo = true.', () => {
        expect(conta01.ativo).toBeTruthy();
    });

    // * Getters: tipo de retorno
    test('Deve retornar o tipo do atributo "CONTA" como string.', () => {
        expect(typeof conta01.conta).toBe('string');
    });

    test('Deve retornar o tipo do atributo "SALDO" como number.', () => {
        expect(typeof conta01.saldo).toBe('number');
    });
    
    test('Deve retornar o tipo do atributo "ATIVO" como boolean.', () => {
        expect(typeof conta01.ativo).toBe('boolean');
    });

    // * Getters
    test('Deve retornar os atributos da conta corretamente.', () => {
        expect(conta01.conta).toBe('0001');
        expect(conta01.saldo).toBe(0);
        expect(conta01.ativo).toBe(true);
    });

    // * Status
    const contaTestStatusSaldo = new Conta('0147');
    
    test('Deve retornar status POSITIVO com saldo igual ou maior zero (0).', () => {
        expect(contaTestStatusSaldo.status()).toContain('Positivo');
    });
    
    const contaTestStatusSaldo2 = new Conta('0148');
    contaTestStatusSaldo2.saldo = -1500
    test('Deve retornar status NEGATIVO com saldo menor que zero (0).', () => {
        expect(contaTestStatusSaldo2.status()).toContain('Negativo');
    });

    test('Deve verificar se método STATUS return uma string.', () => {
        expect(typeof contaTestStatusSaldo2.status()).toBe('string');
    });

    // ! checar final da string: 'status'

    // * Ativar/Desativar conta
    const contaTestAtivo1 = new Conta('D0101');
    const contaTestAtivo2 = new Conta('D0202');
    contaTestAtivo2.desativar();
    const contaTestAtivo3 = new Conta('D0202');
    
    test('Deve desativar conta.', () => {
        contaTestAtivo1.desativar();
        expect(contaTestAtivo1.ativo).not.toBe(true);
        expect(contaTestAtivo1.ativo).toBe(false);
    });

    test('Deve reativar conta desativada.', () => {
        contaTestAtivo1.ativar();
        expect(contaTestAtivo1.ativo).toBe(true);
    });

    test('Deve lancar um erro ao tentar desativar conta já desativada', () => {
        expect(() => {
            contaTestAtivo2.desativar();
        }).toThrow();
    });
    
    test('Deve lancar um erro ao tentar ativar conta já ativada', () => {
        expect(() => {
            contaTestAtivo3.ativar();
        }).toThrow();
    });

    // * alterar nome da conta
    const contaTestAltararNome = new Conta('N0101');

    test('Deve lançar erro ao tentar alterar o nome da conta para o nome existente.', () => {
        expect(() => {
            contaTestAltararNome.alterarNomeConta('N0101');
        }).toThrow();
    });

    test('Deve lançar erro ao tentar alterar nome da conta menor que 4 digitos.', () => {
        expect(() => {
            contaTestAltararNome.alterarNomeConta('asd');
        }).toThrow();
    });

    const contaTestAltararNome2 = new Conta('N0102');
    test('Deve alterar nome com sucesso.', () => {
        let novoNome: string = 'N123';
        contaTestAltararNome2.alterarNomeConta(novoNome);
        expect(contaTestAltararNome2.conta).toBe(novoNome);
    });
    
    // * Deposito
    test('Deve realizar deposito com sucesso.', () => {
        const conta = new Conta('0101');
        conta.depositar(100);
        expect(100).toEqual(conta.saldo);
    });
    
    test('Deve lançar erro ao tentar depositar com valor negativo ou igual a zero (0).', () => {
        expect(() => {
            conta01.depositar(-50);
        }).toThrow();
    });

    test('Deve lançar erro ao tentar depositar em conta desativada.', () => {
        expect(() => {
            contaDesativada.depositar(500);
        }).toThrow();
    });

    // * Sacar
    const contaTestSaque = new Conta('0123');
    contaTestSaque.depositar(1000);
    
    test('Deve realizar saque com sucesso', () => {
        contaTestSaque.sacar(100);
        expect(contaTestSaque.saldo).toEqual(900);
    });

    test('Deve lançar erro ao tentar sacar com valor negativo ou igual a zero (0).', () => {
        expect(() => {
            contaTestSaque.sacar(-50);
        }).toThrow();
        expect(() => {
            contaTestSaque.sacar(0);
        }).toThrow();
        
    });

    test('Deve lançar erro ao tentar sacar de conta desativada.', () => { 
        expect(() => {
            contaDesativada.sacar(100);
        }).toThrow();
    });

    // * Transferência
    const contaTestTransferencia_1 = new Conta('0123');
    contaTestTransferencia_1.depositar(1000);
    const contaTestTransferencia_2 = new Conta('0123');

    test('Deve lançar error quando conta origem desativada tentar realizar transferência', () => {
        expect(() => {
            contaDesativada.transferir(contaTestTransferencia_2, 100);
        }).toThrow();
    });

    test('Deve lançar erro ao tentar transferir para conta destinada desativada', () => {
        expect(() => {
            contaTestTransferencia_1.transferir(contaDesativada, 100);
        }).toThrow();
    });
    
    test('Deve lançar erro quando o valor da transferência for menor ou igual a zero (0).', () => {
        expect(() => {
            contaTestTransferencia_1.transferir(contaTestTransferencia_2, -100);
        }).toThrow();
    });

    test('Deve realizar transferência com sucesso', () => {
        contaTestTransferencia_1.transferir(contaTestTransferencia_2, 100);
        expect(contaTestTransferencia_1.saldo).toEqual(900);
        expect(contaTestTransferencia_2.saldo).toEqual(100);
    });

});