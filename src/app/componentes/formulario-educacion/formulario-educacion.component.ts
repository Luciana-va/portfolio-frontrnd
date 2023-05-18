import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/modelos/educacionModelo';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/modelos/experienciaModelo';

// Este Formulario se utiliza para los componentes educacion y experiencia

@Component({
  selector: 'app-formulario-educacion',
  templateUrl: './formulario-educacion.component.html',
  styleUrls: ['./formulario-educacion.component.css']
})
export class FormularioEducacionComponent implements OnInit  {

  educacion: Educacion[]=[];
  experiencia:Experiencia[]=[];

  constructor(private datosEducacion:EducacionService, private datosExperiencia:ExperienciaService ){}
  
  @Input() nombreModal:string= "";
  @Input() nombreBoton:string= "";
  @Input() nombre:string= "";
  @Input() valorId:string= "";
  @Input() valorDescripcion:string="";
  @Input() valorInicio:string= "2000-01-01";
  @Input() valorFinal:string= "";
  @Input() valorInstitucion:string= "";
  @Input() valorLinkImagen:string= "";
  @Input() valorAlternativo:string= "";
  @Input() funcionDelboton:string= "";
  @Output() onClick = new EventEmitter();
 

      educYexpForm = new FormGroup({
       id: new FormControl (''),
       descripcion: new FormControl('',[Validators.required]),
       fechaInicio: new FormControl('',[Validators.required]),
       fechaFinalizacion: new FormControl('',),
       institucion: new FormControl('',[Validators.required]),
       linkLogo: new FormControl(''),
       textoAlternativo: new FormControl(''),
    });

//Esta funcion es para determinar los valores con los cuales se abre el formulario para modificar
    valoresInicialesEduyExp(){
      this.educYexpForm.setValue({
        id: this.valorId,
        descripcion:this.valorDescripcion,
        fechaInicio:this.valorInicio,
        fechaFinalizacion:this.valorFinal,
        institucion:this.valorInstitucion ,
        linkLogo:this.valorLinkImagen,
        textoAlternativo: this.valorAlternativo,    

      });  

    }
    
    ngOnInit() {
      this.valoresInicialesEduyExp();
    }


    avisar(){
      this.onClick.emit();
    };


    //Esta funcion es para crear un nuevo item en educacion
 crearEducacion():void{
  this.datosEducacion.postEducacion(this.educYexpForm.value).subscribe(data =>{})
  this.avisar();  
  this.educYexpForm.reset;
        
 }


    //Esta funcion es para modificar un item en educacion
  modificarEducacion(id:any):void{
    this.datosEducacion.modificarEducacionId(id,this.educYexpForm.value).subscribe(data =>{
      this.avisar();
      
    });
  }
 
     //Esta funcion es para crear un nuevo item en experiencia   
    crearExperiencia(){
      this.datosExperiencia.postExperiencia(this.educYexpForm.value).subscribe(data =>{})
      this.avisar();  

    }

    //Esta funcion es para modificar un item en experiencia
  modificarExperiencia(id:any):void{
    this.datosExperiencia.modificarExperienciaId(id,this.educYexpForm.value).subscribe(data =>{
    this.avisar();
        
    });
  }

opretarBtn(event:Event):void{
  console.log("apretar btn desde el form");
  
}
  
}
