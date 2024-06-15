import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicoComponent } from './medico.component'
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


describe( 'MedicoComponent', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;


  beforeEach( () => {

    TestBed.configureTestingModule({
        declarations: [ MedicoComponent ],
        providers: [ MedicoService ],
        imports: [ HttpClientModule ]
    });

    // Crea componente probado y procesado por angualar
    fixture = TestBed.createComponent( MedicoComponent );
    component = fixture.componentInstance;


  });


  it( 'Debe de crearse el componente', () => {
    expect( component ).toBeTruthy();
  });


  it( 'Debe retornar el nombre del médico', () => {

    const nombre = 'Miguel';
    const res = component.saludarMedico( nombre );

    expect( res ).toContain( nombre );

  });

});
