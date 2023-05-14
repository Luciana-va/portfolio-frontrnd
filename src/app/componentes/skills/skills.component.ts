import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/modelos/skillsModelo';
import { SkillsService } from 'src/app/servicios/skills.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit  {
  
  skills: Skills []=[];

  constructor(private datosSkills:SkillsService){}

  actualizarSkills(){
 
    this.datosSkills.traerSkill().subscribe(data =>{this.skills = data});
  }; 

  ngOnInit():void{
   
    this.actualizarSkills()
    
  }

  eliminarSkills(id:any) {
    this.datosSkills.eliminarSkill(id).subscribe(resp=>{
      console.log(resp);
      this.actualizarSkills();
     
    });
  }
}