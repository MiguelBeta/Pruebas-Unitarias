import { usuarioIngresado } from './booleanos'


describe( 'Pruebas de Booleanos', () => {

  it( 'Debe retornar True', () => {

    const res = usuarioIngresado();

    //Lo que espera la funcion
    expect( res ).toBeTruthy();

  });

});

