import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/modelos/skillsModelo';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-formulario-skills',
  templateUrl: './formulario-skills.component.html',
  styleUrls: ['./formulario-skills.component.css']
})
export class FormularioSkillsComponent implements OnInit  {

  skill: Skills[]=[];

  constructor(private datosSkill:SkillsService){}

  @Input() nombreModal:string= "";
  @Input() nombreBoton:string= "";
  @Input() valorId:string= "";
  @Input() valorHabilidad:string="";
  @Input() valorPorcentaje:string= "";
  @Input() valorOtros:string= "";
  @Output() onClick = new EventEmitter();


  skillsForm = new FormGroup({
    id: new FormControl (''),
    habilidad: new FormControl('',[Validators.required, Validators.maxLength(100)]),
    porcentaje: new FormControl('',[Validators.required, Validators.max(100), Validators.min(1)]),
    otros: new FormControl('',[Validators.maxLength(200)])
  });

  valoresInicialesSkills(){
    this.skillsForm.setValue({
      id: this.valorId,
      habilidad:this.valorHabilidad,
      porcentaje:this.valorPorcentaje,
      otros:this.valorOtros, 

    })
  }; 

  ngOnInit(){
    this.valoresInicialesSkills()
  };

  avisar(){
    this.onClick.emit();
  };

  crearSkill():void{
    this.datosSkill.postSkill(this.skillsForm.value).subscribe(data =>{})
    this.avisar(); 
  };

  modificarskill(id:any):void{
    this.datosSkill.modificarSkillId(id,this.skillsForm.value).subscribe(data =>{
      this.avisar();});
    }






}
