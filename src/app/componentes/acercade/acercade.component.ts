import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit  {
  listaDatosPersonales:any;
  logIn:boolean = false;

  constructor(private datosPortfolio:PortfolioService){}

  showLog(){
    console.log(this.logIn);
  }

  ngOnInit():void{
    this.datosPortfolio.obtenerDatos().subscribe
    (datos=>{this.listaDatosPersonales=datos.persona;  
    });
    this.datosPortfolio.log.subscribe
    (log=>{this.logIn=log});
  }

}
