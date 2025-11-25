import Celular from "../../../models/celular/Celular";

describe('Suite - Celular', () => {
    
    test('Deve instanciar um celular novo com sucesso', () => {
        const celularNovo01 = new Celular('132-184-418', 'Modelo01');
        
        expect(celularNovo01.id).toBe('132-184-418');
        expect(celularNovo01.modelo).toBe('Modelo01');
        expect(celularNovo01.ligado).toBeFalsy;
    });

    // * Celular deligado
    const celularDesligado01 = new Celular('132-184-418', 'Modelo01');
    
    test('Deve ligar o celular com sucesso', () => {
        celularDesligado01.ligar();
        
        expect(celularDesligado01.ligado).toBeTruthy();
    });

    // * Celular Ligado
    const celularDesligado02 = new Celular('132-184-418', 'Modelo01');
    test('Deve desligar o celular com sucesso', () => {
        celularDesligado02.ligar();
        celularDesligado02.desligar();

        expect(celularDesligado02.ligado).toBeFalsy();
    });

});
