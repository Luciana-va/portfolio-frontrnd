import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../modelos/educacionModelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http:HttpClient) { }
  
  apiUrl = 'http://localhost:8080/api/educacion';

  educacion: Educacion[] =[]

  public getEducacion(){
    return this.http.get<Educacion[]>(this.apiUrl);
  }

  public postEducacion(educacion:Educacion){
    return this.http.post<Educacion>(this.apiUrl,educacion);
  }

  public modificarEducacionId(id:any, educacion:Educacion): Observable<Object> {
    return this.http.put(this.apiUrl+'/'+id,educacion);
  }

   public eliminarEducacion(id:any):Observable<any>{
    return this.http.delete(this.apiUrl+'/'+id);
   }



}
