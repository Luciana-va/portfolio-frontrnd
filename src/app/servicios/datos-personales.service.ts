import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosPersonales } from '../modelos/datosPersonalesModelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

  constructor(private http:HttpClient) { }

  apiUrl = 'http://localhost:8080/api/datosPersonales';

  datosPersonales: DatosPersonales[]=[];


  public getDatosPersonales(){
    return this.http.get<DatosPersonales[]>(this.apiUrl);
  }

  public modificarUsuarioId(id:any, datosPersonales:DatosPersonales): Observable<Object> {
    return this.http.put(this.apiUrl+'/'+id,datosPersonales);
  }



}
