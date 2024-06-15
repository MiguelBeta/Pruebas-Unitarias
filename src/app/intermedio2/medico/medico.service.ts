import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor( public http: HttpClient ) { }


  getMedicos(): Observable<any[]> {

    return this.http.get<any>('...').pipe(map( response => response ));

  }

}
