import { Jugador2 } from "./jugador2";


describe('Jugador 2 Emit', () => {

  let jugador: Jugador2;

  // Se ejecuta antes de cualquier cosa
  beforeEach( () => jugador = new Jugador2() );

  it( 'Debe de emitir un evento cuando recibe daño', () => {


    let nuevoHP = 0;

    // Escucha cuando se emite un cambio en el evento o recibe alguna notificación
    jugador.hpCambia.subscribe( hp => {
      nuevoHP = hp;
    });

    jugador.recibeDanio( 1000 );

    // Lo que espera recibir la prueba para que sea exitosa
    expect( nuevoHP ).toBe(0);

  });

  it( 'Debe de emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {


    let nuevoHP = 0;

    // Escucha cuando se emite un cambio en el evento o recibe alguna notificación
    jugador.hpCambia.subscribe( hp => {
      nuevoHP = hp;
    });

    jugador.recibeDanio( 50 );

    // Lo que espera recibir la prueba para que sea exitosa
    expect( nuevoHP ).toBe(50);

  });


});
