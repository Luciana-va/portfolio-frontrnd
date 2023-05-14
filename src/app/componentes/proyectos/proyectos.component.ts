import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelos/proyectosModelo';
import { LogService } from 'src/app/servicios/log.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  proyectos:Proyectos[]=[];

  logIn:boolean = false;

  constructor(private datosProyectos:ProyectosService, private LogInOut:LogService ){}



  actualizarProyectos(){
 
    this.datosProyectos.traerproyectos().subscribe(data =>{this.proyectos = data});
  }; 



  ngOnInit(){
    this.actualizarProyectos();

    this.LogInOut.log.subscribe
    (log=>{this.logIn=log});
  }

  eliminarProyecto(id:any) {
    this.datosProyectos.eliminarProyecto(id).subscribe(resp=>{
      console.log(resp);
      this.actualizarProyectos();
     
    });}

}
