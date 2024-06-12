import { TestBed } from '@angular/core/testing';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { Observable } from 'rxjs';
import { Observable, from, EMPTY, throwError } from 'rxjs';


describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  // const servicio = new MedicosService(null);
  let servicio: MedicosService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    // componente = new MedicosComponent( servicio );
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MedicosService]
    });

    servicio = TestBed.inject(MedicosService);
    httpTestingController = TestBed.inject(HttpTestingController);
    componente = new MedicosComponent(servicio);

  });



  it('Init: Debe cargar los medicos', () => {

    const medicos = ['medico1', 'medico2', 'medico3'];

    // Espias o peticiones falsas
    spyOn(servicio, 'getMedicos').and.callFake(() => {

      return from([medicos]);
    })

    componente.ngOnInit();

    // Lo que espera recibir la prueba
    expect(componente.medicos.length).toBeGreaterThan(0);

  });

  it( 'Debe de llamar al servidor para agregar un médico', () => {

    const espia = spyOn( servicio, 'agregarMedico' ).and.callFake( medico => {
      return EMPTY;
    });

    componente.agregarMedico();

    expect( espia ).toHaveBeenCalled();

  });

  it( 'Debe de agregar un nuevo médico al arreglo de médicos', () => {

    const medico = { id: 1, nombre: 'Miguel' };

    spyOn( servicio, 'agregarMedico' )
            .and.returnValue( from([ medico ]) );

    componente.agregarMedico();

    expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);

  });


  it( 'si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {

    const miError = 'No se puedo agregar el medico';

    spyOn( servicio, 'agregarMedico' ).and
            .returnValue( throwError( miError ) );

    componente.agregarMedico();

    expect( componente.mensajeError ).toBe( miError );

  });

  it( 'Debe de llamar al servidor para borrar un médico', () => {

    spyOn( window, 'confirm' ).and.returnValue( true );

    const espia = spyOn( servicio, 'borrarMedico' ).and
                          .returnValue( EMPTY );

    componente.borrarMedico( '1' );

    expect( espia ).toHaveBeenCalledWith( '1' );

  });

  it( 'NO debe de llamar al servidor para borrar un médico', () => {

    spyOn( window, 'confirm' ).and.returnValue( false );

    const espia = spyOn( servicio, 'borrarMedico' ).and
                          .returnValue( EMPTY );

    componente.borrarMedico( '1' );

    expect( espia ).not.toHaveBeenCalledWith( '1' );

  });
});
