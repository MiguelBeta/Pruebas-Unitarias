import { incrementar } from './numeros';


describe( 'Pruebas de números', () => {

  it( 'Debe regresar 100, si el número engresado es mayor a 100', () => {

    const res = incrementar(300);
    // Lo que espera la prueba
    expect( res ).toBe( 100 );

  });

  it( 'Debe regresar el numero ingresado + 1, si no es mayor a 100', () => {

    const res = incrementar(50);
    // Lo que espera la prueba
    expect( res ).toBe( 51 );

  });

});
