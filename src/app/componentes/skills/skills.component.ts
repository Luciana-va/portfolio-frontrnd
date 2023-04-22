import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit  {
  listaSkills:any;

  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit():void{
    this.datosPortfolio.obtenerDatos().subscribe
    (datos=>{
    this.listaSkills=datos.skills;  
    });
    
  }
}