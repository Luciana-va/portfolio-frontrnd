import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../modelos/redesSocialesModelo';

@Injectable({
  providedIn: 'root'
})
export class RedesSocialesService {
  

  redes: Redes[]= [];

  constructor(private http:HttpClient) { }
// apiUrl = 'http://localhost:8080/api/RedesSociales';
apiUrl = 'https://portfolio-backend-ncwm.onrender.com/api/RedesSociales';

  public getRedes(){
    return this.http.get<Redes[]>(this.apiUrl);
  }

  public modificarRedesId(id:any, redes:Redes): Observable<Object> {
    return this.http.put(this.apiUrl+'/'+id,redes);
  }

 

}
