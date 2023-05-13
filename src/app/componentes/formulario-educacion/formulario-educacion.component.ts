import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/modelos/educacionModelo';


@Component({
  selector: 'app-formulario-educacion',
  templateUrl: './formulario-educacion.component.html',
  styleUrls: ['./formulario-educacion.component.css']
})
export class FormularioEducacionComponent implements OnInit  {

  educacion: Educacion[]=[];

  constructor(private datosEducacion:EducacionService ){}
  
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
        
 }



  modificarEducacion(id:any):void{
    this.datosEducacion.modificarEducacionId(id,this.educYexpForm.value).subscribe(data =>{
      this.avisar();
      
    });
  }

   
  

  
    
    oprimirbtnguardar(){
      console.log("guardar");

    }

    oprimirbtncrear(){
      console.log("guardar");

    }

opretarBtn(event:Event):void{
  console.log("apretar btn desde el form");
  
}
  
}
