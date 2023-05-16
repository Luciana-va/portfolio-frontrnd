import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelos/proyectosModelo';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http:HttpClient) { }

  // apiUrl = 'http://localhost:8080/api/proyectos'
  apiUrl = 'https://portfolio-backend-ncwm.onrender.com/api/proyectos';

  proyectos: Proyectos[] = [];

  public traerproyectos(){
    return this.http.get<Proyectos[]>(this.apiUrl);
  }

  public postProyecto(proyectos:Proyectos){
    return this.http.post<Proyectos>(this.apiUrl,proyectos);
  }

  public modificarProyectoId(id:any, proyectos:Proyectos): Observable<Object> {
    return this.http.put(this.apiUrl+'/'+id,proyectos);
  }

  public eliminarProyecto(id:any):Observable<any>{
    return this.http.delete(this.apiUrl+'/'+id);
   }



}
