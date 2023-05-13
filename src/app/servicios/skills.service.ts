import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../modelos/skillsModelo';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http:HttpClient) { }

  apiUrl = 'http://localhost:8080/api/skills';

  skills:Skills[]=[];


  public traerSkill(){
    return this.http.get<Skills[]>(this.apiUrl);
  }

  public postSkill(skills:Skills){
    return this.http.post<Skills>(this.apiUrl,skills);
  }

  public modificarSkillId(id:any, skills:Skills): Observable<Object> {
    return this.http.put(this.apiUrl+'/'+id,skills);
  }

   public eliminarSkill(id:any):Observable<any>{
    return this.http.delete(this.apiUrl+'/'+id);
   }

}
