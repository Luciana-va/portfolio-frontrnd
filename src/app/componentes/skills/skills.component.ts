import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/modelos/skillsModelo';
import { LogService } from 'src/app/servicios/log.service';
import { SkillsService } from 'src/app/servicios/skills.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit  {
  
  skills: Skills []=[];

  logIn:boolean = false;

  constructor(private datosSkills:SkillsService, private LogInOut:LogService){}

  actualizarSkills(){
 
    this.datosSkills.traerSkill().subscribe(data =>{this.skills = data});
  }; 

  ngOnInit():void{
   
    this.actualizarSkills();
    
    this.LogInOut.log.subscribe
    (log=>{this.logIn=log});
    
  }

  eliminarSkills(id:any) {
    this.datosSkills.eliminarSkill(id).subscribe(resp=>{
      console.log(resp);
      this.actualizarSkills();
     
    });
  }
}