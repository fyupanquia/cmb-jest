import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matematicos', () =>{
    it('Test plus', () => {
        expect(sumar(1,2)).toBe(3);
    });

    it('Tets Less', () => {
        expect(restar(2,2)).toBe(0);
    })

    it('Test multiply', () => {
        expect(multiplicar(5,5)).toBe(25);
    });

    it('Test divide', () => {
        expect(dividir(9,3)).toBe(3);
    });
});