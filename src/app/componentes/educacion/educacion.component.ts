import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacionModelo';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit  {
  
  educacion: Educacion[]=[];

  constructor(private datosEducacion:EducacionService ){}
    
  
  


  ngOnInit(){
    
    this.datosEducacion.getEducacion().subscribe(data =>{this.educacion = data});
    
    
    
    
  }

   //Esta funcion es para eliminar un elemnto de la lista de educacion.
  eliminarEducacion(id:any) {
    this.datosEducacion.eliminarEducacion(id).subscribe(resp=>{
     
    })
    location. reload();

  }

otrafuncion(){
  console.log("se apretó el boton desde educacion");
}
  
}
