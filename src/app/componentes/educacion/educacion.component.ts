import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit  {
  listaEducacion:any;
  
  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit():void{
    this.datosPortfolio.obtenerDatos().subscribe
    (datos=>{
    this.listaEducacion=datos.educacion;  
    });
    
  }
}