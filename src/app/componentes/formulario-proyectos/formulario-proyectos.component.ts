import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/modelos/proyectosModelo';
import { ProyectosService } from 'src/app/servicios/proyectos.service';


@Component({
  selector: 'app-formulario-proyectos',
  templateUrl: './formulario-proyectos.component.html',
  styleUrls: ['./formulario-proyectos.component.css']
})
export class FormularioProyectosComponent implements OnInit{

  proyectos: Proyectos[] = [];

  constructor(private datosProyecto:ProyectosService){}

  @Input() nombreModal:string= "";
  @Input() nombreBoton:string= "";
  @Input() valorId:string= "";
  @Input() valorTitulo:string="";
  @Input() valorDescripcion:string= "";
  @Input() valorLinkImagen:string= "";
  @Input () valorOtros:string="";
  @Output() onClick = new EventEmitter();


  proyectosForm = new FormGroup({
    id: new FormControl (''),
    titulo: new FormControl('',[Validators.required, Validators.maxLength(300)]),
    descripcion: new FormControl('',[Validators.required, Validators.maxLength(300)]),
    linkImagen: new FormControl('',[Validators.maxLength(200)]),
    otros: new FormControl('',[Validators.maxLength(200)])
  });

  valoresInicialesProyectos(){
    this.proyectosForm.setValue({
      id: this.valorId,
      titulo:this.valorTitulo,
      descripcion:this.valorDescripcion,
      linkImagen:this.valorLinkImagen,
      otros:this.valorOtros, 

    })
  }; 


  ngOnInit(){
    this.valoresInicialesProyectos()
  }

  avisar(){
    this.onClick.emit();
  };

  crearProyecto():void{
    this.datosProyecto.postProyecto(this.proyectosForm.value).subscribe(data =>{})
    this.avisar(); 
    this.proyectosForm.reset;
  };

  modificarProyecto(id:any):void{
    this.datosProyecto.modificarProyectoId(id,this.proyectosForm.value).subscribe(data =>{
      this.avisar();});
    }

}
