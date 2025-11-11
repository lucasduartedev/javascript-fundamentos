import Cartao from "../../../models/banco/Cartao";
import Compra from "../../../models/banco/Compra";
import Conta from "../../../models/banco/Conta";

describe('Suite - Cartao', () => {

    const cartaoTest01 = new Cartao(1, '1234-1234', '123');
    cartaoTest01.ativarCartao();
    
    const cartaoTestDesativado01 = new Cartao(9, '4545-4545', '456');

    test('Deve instanciar novo cartão desativado.', () => {
        expect(cartaoTestDesativado01.ativo).toBe(false);
    });

    // * método Desativar cartão
    const cartaoTestParaDesativar01 = new Cartao(9, '4545-4545', '456');
    cartaoTestParaDesativar01.ativarCartao();

    test('Deve lançar exceção ao tentar desativar cartão já desativado.', () => {
        expect(() => {
            cartaoTestDesativado01.desativarCartao();
        }).toThrow();
    });
    
    test('Deve desativar cartão com sucesso.', () => {
        cartaoTestParaDesativar01.desativarCartao();
        expect(cartaoTestParaDesativar01.ativo).toBeFalsy();
    });
    
    // * método Ativar cartão
    const cartaoTestParaAtivar01 = new Cartao(9, '4545-4545', '456');

    test('Deve ativar cartão com sucesso.', () => {
        cartaoTestParaAtivar01.ativarCartao();
        expect(cartaoTestParaAtivar01.ativo).toBeTruthy();
    });

    test('Deve lançar exceção ao tentar ativar cartão já ativado.', () => {
        expect(() => {
            cartaoTestParaAtivar01.ativarCartao();
        }).toThrow();
    });

    // * método validar compra
    const cartaoTestCompra01 = new Cartao(9, '4545-4545', '456');
    cartaoTestCompra01.ativarCartao();

    const cartaoDesativadoTestCompra = new Cartao(9, '4545-4545', '456');

    const compraTest01 = new Compra(100.0, new Date(2025, 11, 15), 'Mercadinho XYZ');

    test('Deve lancar exceção/recusar compra com cartão desativado.', () => {
        expect(() => [
            cartaoDesativadoTestCompra.validarCompra(compraTest01)
        ]).toThrow();
    });
    
});
