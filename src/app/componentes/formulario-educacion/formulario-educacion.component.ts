import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-educacion',
  templateUrl: './formulario-educacion.component.html',
  styleUrls: ['./formulario-educacion.component.css']
})
export class FormularioEducacionComponent implements OnInit  {
  
  @Input() nombreModal:string= "";
  @Input() nombre:string= "";
  @Input() valorId:string= "";
  @Input() valorDescripcion:string= "";
  @Input() valorInicio:string= "2000-01-01";
  @Input() valorFinal:string= "";
  @Input() valorInstitucion:string= "";
  @Input() valorLinkImagen:string= "";
  @Input() valorAlternativo:string= "";
  
  
  

      educYexpForm = new FormGroup({
       descripcion: new FormControl(this.valorId,[Validators.required]),
       inicio: new FormControl('',[Validators.required]),
       final: new FormControl('',),
       institucion: new FormControl('',[Validators.required]),
       linkImagen: new FormControl(''),
       alternativo: new FormControl(''),
    });

    
    
    onSubmit(value: any){
      if(this.educYexpForm.valid){
        alert('todo ok');
      } else{
        alert('error');
      };
      console.log(this.educYexpForm.value, this.valorId);
    };

    ngOnInit() {
      this.educYexpForm.setValue({
        descripcion:this.valorDescripcion,
        inicio:this.valorInicio,
        final:this.valorFinal,
        institucion:this.valorInstitucion ,
       linkImagen:this.valorLinkImagen,
       alternativo: this.valorAlternativo,    

      })
    
    
    }
   
    
  
}
