


import { Jugador } from './clase';


describe( 'Pruebas de clase', () => {

  // const jugador = new Jugador();
  let jugador = new Jugador();

  beforeAll ( () => {
    // console.log( 'beforeAll' );
  });
  beforeEach ( () => {
    // console.log( 'beforeEach' );
    jugador.hp = 100;
  });
  afterAll ( () => {
    // console.log( 'afterAll' );
  });
  afterEach ( () => {
    // console.log( 'afterEach' );
    jugador = new Jugador();
  });

  it( 'Debe retornar 80 de hp, si recibe 20 de daño', () => {

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);

    // Lo que se espera de la prueba
    expect( resp ).toBe( 80 );

  });

  // Al Agregarle la x, omite esa prueba
  xit( 'Debe retornar 50 de hp, si recibe 50 de daño', () => {

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);

    // Lo que se espera de la prueba
    expect( resp ).toBe( 50 );

  });

  it( 'Debe retornar 0 de hp, si recibe 100 de daño o más', () => {

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(100);

    // Lo que se espera de la prueba
    expect( resp ).toBe( 0 );

  });

})

