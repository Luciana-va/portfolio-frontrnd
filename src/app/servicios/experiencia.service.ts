import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experienciaModelo';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) {  }

  apiUrl = 'http://localhost:8080/api/experiencia';

  experiencia: Experiencia[]=[];

  public traerExperiencia(){
    return this.http.get<Experiencia[]>(this.apiUrl);
  }

  public postExperiencia(experiencia:Experiencia){
    return this.http.post<Experiencia>(this.apiUrl,experiencia);
  }

  public modificarExperienciaId(id:any, experiencia:Experiencia): Observable<Object> {
    return this.http.put(this.apiUrl+'/'+id,experiencia);
  }

   public eliminarExperiencias(id:any):Observable<any>{
    return this.http.delete(this.apiUrl+'/'+id);
   }

}
