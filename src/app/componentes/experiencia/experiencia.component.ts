import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experienciaModelo';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { LogService } from 'src/app/servicios/log.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[]=[];

  logIn:boolean = false;

  constructor(private datosExperiencia:ExperienciaService, private LogInOut:LogService ){}

  actualizarExperiencia(){
 
    this.datosExperiencia.traerExperiencia().subscribe(data =>{this.experiencia = data});
  }; 

  ngOnInit(){
    this.actualizarExperiencia();

    this.LogInOut.log.subscribe
    (log=>{this.logIn=log});

  };

  eliminarExperiencia(id:any) {
    this.datosExperiencia.eliminarExperiencias(id).subscribe(resp=>{
      console.log(resp);
      this.actualizarExperiencia();
     
    });
  }




}
