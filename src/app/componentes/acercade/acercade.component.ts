import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/servicios/log.service';
import { DatosPersonales } from 'src/app/modelos/datosPersonalesModelo';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';


@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit  {
  
  logIn:boolean = false;

  datosPersonales:DatosPersonales[]=[];

  constructor( private LogInOut:LogService,
    private datosDatosPersonales:DatosPersonalesService
    ){}


    

  showLog(){
    console.log(this.logIn);
  }

  ngOnInit():void{
    
  this.datosDatosPersonales.getDatosPersonales().subscribe(data =>{this.datosPersonales = data});


    this.LogInOut.log.subscribe
    (log=>{this.logIn=log});
  }

}
