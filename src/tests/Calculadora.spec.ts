import Calculadora from "../Calculadora";

describe('Suite: Calculadora', () => {
    const calc1 = new Calculadora();

    test('Testa soma entre dois números', () => {
        let resultado = calc1.soma(5, 4);
        expect(9).toBe(resultado);
    })

});
