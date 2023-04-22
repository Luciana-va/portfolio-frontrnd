import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
   //Con EventEmiter en el servicio puedo comunicar si el estado del login
  log: EventEmitter<boolean> = new EventEmitter<boolean>();
 

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> {
    return this.http.get('./assets/datos/db.json');
  }



}
