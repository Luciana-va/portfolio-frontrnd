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
  @Input() nombre:string= "";
  @Input() valorId:string= "";
  @Input() valorHabilidad:string="";
  @Input() valorPorcentaje:number= 1;
  @Input() valorOtros:string= "";
  @Input() funcionDelboton:string= "";
  @Output() onClick = new EventEmitter();


  skillsForm = new FormGroup({
    id: new FormControl (''),
    habilidad: new FormControl('',[Validators.required]),
    porcentaje: new FormControl(0,[Validators.required]),
    otros: new FormControl('',)
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

  crearSkill():void{};

  modificarskill(id:any):void{};






}
