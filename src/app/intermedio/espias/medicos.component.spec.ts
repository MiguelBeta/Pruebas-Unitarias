import { TestBed } from '@angular/core/testing';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { Observable } from 'rxjs';
import { from } from 'rxjs';


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


});
