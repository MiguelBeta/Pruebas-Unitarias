
// describe('Pruebas de string');
// it('Debe regresar un string');

import { mensaje } from "./string"


describe( 'Pruebas de string', () => {

  it( 'Debe de regresar un string', () => {

    const resp = mensaje( 'MiguelBeta' );

    // Espera que tipo de resuesta es
    // Esto es lo que esta esperando la prueba de la respuesta
    expect( typeof resp ).toBe( 'string' );

  });

 /////////////////////

  it( 'Debe de retornar un saludo con el nombre enviado', () => {

    const nombre = 'MiguelBeta'
    const resp = mensaje( nombre );
    // Espera que tipo de resuesta es
    // Esto es lo que esta esperando la prueba de la respuesta
    expect( resp ).toContain( nombre );

  });


})
