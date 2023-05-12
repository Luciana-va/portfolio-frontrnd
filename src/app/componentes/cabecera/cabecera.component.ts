import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/modelos/redesSocialesModelo';
import { LogService } from 'src/app/servicios/log.service';
import { RedesSocialesService } from 'src/app/servicios/redes-sociales.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  usuario:any;
  contrasena:any;
  
  redes:Redes[]=[];

  constructor( private datosRedes:RedesSocialesService, private logINOut: LogService, private http: HttpClient
   
    ){}
  
    ngOnInit(){

      this.datosRedes.getRedes().subscribe(data=>{this.redes=data});

    
    };


}
