import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

//Con EventEmiter en el servicio puedo comunicar si el estado del login
log: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
}
