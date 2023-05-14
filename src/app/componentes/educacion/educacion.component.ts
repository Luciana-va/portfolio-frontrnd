import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacionModelo';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { LogService } from 'src/app/servicios/log.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit  {
  
  educacion: Educacion[]=[];

  logIn:boolean = false;

  constructor(private datosEducacion:EducacionService, private LogInOut:LogService){}
   
  //esta funcion llama a base de datos
  actualizar(){
 
    this.datosEducacion.getEducacion().subscribe(data =>{this.educacion = data});
  }; 

  ngOnInit(){
    
    this.actualizar();
    
    this.LogInOut.log.subscribe
    (log=>{this.logIn=log});
  }
  

   //Esta funcion es para eliminar un elemnto de la lista de educacion.
  eliminarEducacion(id:any) {
    this.datosEducacion.eliminarEducacion(id).subscribe(resp=>{
      console.log(resp);
      this.actualizar();
     
    });
    

  }


  
}
