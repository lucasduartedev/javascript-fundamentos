import Cartao from "../../../models/banco/Cartao";
import Conta from "../../../models/banco/Conta"
import {log, error} from "console"
import PessoaFisica from "../../../models/banco/PessoaFisica";
import Contato from "../../../models/banco/Contato";

describe('Suite - Banco', () => {

    // * Conta
    const contato01 = new Contato('62999887722', 'fulano01@mail.com');
    const pessoa01 = new PessoaFisica('Fulano de Tal-01', '123123123-45', contato01);
    const conta01 = new Conta('0001', pessoa01);
    
    const contato02 = new Contato('62966117722', 'fulano02@mail.com');
    const pessoa02 = new PessoaFisica('Fulano de Tal-02', '123123444-46', contato02);
    const contaDesativada = new Conta('desativada_01', pessoa02);
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
    const contato03 = new Contato('62966119900', 'fulano03@mail.com');
    const pessoa03 = new PessoaFisica('Fulano de Tal-03', '123566799-46', contato03);
    const contaTestStatusSaldo = new Conta('0147', pessoa03);
    
    test('Deve retornar status POSITIVO com saldo igual ou maior zero (0).', () => {
        expect(contaTestStatusSaldo.status()).toContain('Positivo');
    });
    
    const contato04 = new Contato('629551119900', 'fulano04@mail.com');
    const pessoa04 = new PessoaFisica('Fulano de Tal-04', '123566799-46', contato04);
    const contaTestStatusSaldo2 = new Conta('0148', pessoa04);
    contaTestStatusSaldo2.saldo = -1500
    test('Deve retornar status NEGATIVO com saldo menor que zero (0).', () => {
        expect(contaTestStatusSaldo2.status()).toContain('Negativo');
    });

    test('Deve verificar se método STATUS return uma string.', () => {
        expect(typeof contaTestStatusSaldo2.status()).toBe('string');
    });

    // ! checar final da string: 'status'

    // * Ativar/Desativar conta
    const contato05 = new Contato('629551119900', 'fulano05@mail.com');
    const pessoa05 = new PessoaFisica('Fulano de Tal-05', '123511799-46', contato05);
    
    const contato06 = new Contato('629551117900', 'fulano06@mail.com');
    const pessoa06 = new PessoaFisica('Fulano de Tal-06', '123533799-46', contato06);
    
    const contato07 = new Contato('629551114500', 'fulano07@mail.com');
    const pessoa07 = new PessoaFisica('Fulano de Tal-07', '123544799-46', contato07);
    

    const contaTestAtivo1 = new Conta('D0101', pessoa05);
    const contaTestAtivo2 = new Conta('D0202', pessoa06);
    contaTestAtivo2.desativar();
    const contaTestAtivo3 = new Conta('D0202', pessoa07);
    
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
    const contato08 = new Contato('629558884500', 'fulano08@mail.com');
    const pessoa08 = new PessoaFisica('Fulano de Tal-08', '123544888-46', contato08);
    const contaTestAltararNome = new Conta('N0101', pessoa08);

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

    const contato09 = new Contato('629559994500', 'fulano09@mail.com');
    const pessoa09 = new PessoaFisica('Fulano de Tal-09', '123999888-46', contato09);

    const contaTestAltararNome2 = new Conta('N0102', pessoa09);
    test('Deve alterar nome com sucesso.', () => {
        let novoNome: string = 'N123';
        contaTestAltararNome2.alterarNomeConta(novoNome);
        expect(contaTestAltararNome2.conta).toBe(novoNome);
    });
    
    // * Deposito
    test('Deve realizar deposito com sucesso.', () => {
        const conta = new Conta('0101', pessoa01);
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
    const contaTestSaque = new Conta('0123', pessoa01);
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
    const contaTestTransferencia_1 = new Conta('0123', pessoa01);
    contaTestTransferencia_1.depositar(1000);
    const contaTestTransferencia_2 = new Conta('0123', pessoa02);

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

    // * conceder cartao
    const contaTestCartao01 = new Conta('C0101', pessoa01);
    const cartaoTest01 = new Cartao(1, '1234-1234', '123');
    const cartaoTest02 = new Cartao(9, '4545-4545', '456');
    const cartaoTest03 = new Cartao(5, '7978-7978', '789');
    const cartaoTest04 = new Cartao(8, '9876-9876', '999');

    cartaoTest01.ativarCartao();
    cartaoTest02.ativarCartao();
    cartaoTest03.ativarCartao();
    cartaoTest04.ativarCartao();

    test('Deve cadastrar novo cartao a lista de cartões', () => {
        contaTestCartao01.concederCartao(cartaoTest01);
        expect(contaTestCartao01.cartoes.length).toBe(1);
    });
    
    // limite de três(3) cartões por usuário
    test('Deve lancar erro ao tentar adicionar um quarto cartão', () => { 
        contaTestCartao01.concederCartao(cartaoTest02);
        contaTestCartao01.concederCartao(cartaoTest03);
        expect(() => {
            contaTestCartao01.concederCartao(cartaoTest04);
        }).toThrow();
    });

});
