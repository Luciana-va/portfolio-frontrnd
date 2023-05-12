import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatosPersonales } from 'src/app/modelos/datosPersonalesModelo';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-formulario-acercade',
  templateUrl: './formulario-acercade.component.html',
  styleUrls: ['./formulario-acercade.component.css']
})
export class FormularioAcercadeComponent implements OnInit{

 datosPersonales: DatosPersonales[]=[];

  constructor(private datosPersonalesService: DatosPersonalesService){}

  @Input() valorImgBanner:string= "";
  @Input() valorName:string= "";
  @Input() valorFotoPerfil:string= "";
  @Input() valorAcerca:string= "";
  
 

  acercadeForm = new FormGroup({
    id: new FormControl (''),
    nombre: new FormControl('',[Validators.required]),
    linkBanner: new FormControl('',[Validators.required]),    
    linkFoto: new FormControl('',[Validators.required]),   
    acerca: new FormControl('',[Validators.required]),
  });
  

  
  ngOnInit() {
    this.acercadeForm.setValue({
      id:"0",
      nombre:this.valorName,
      linkBanner:this.valorImgBanner,
      linkFoto:this.valorFotoPerfil,    
      acerca:this.valorAcerca,
    })
  }

  modificarUsuario(id:any):void{
    this.datosPersonalesService.modificarUsuarioId(id,this.acercadeForm.value).subscribe(data =>{
      
    });
  }







}
