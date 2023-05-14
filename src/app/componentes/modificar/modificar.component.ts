import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Redes } from 'src/app/modelos/redesSocialesModelo';
import { RedesSocialesService } from 'src/app/servicios/redes-sociales.service';



@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

 redes: Redes[] = [];

  constructor( private datosRedes:RedesSocialesService){}

  @Input() idRedes: string = "";
  @Input() linkFace: string = "";
  @Input() linkInsta: string = "";
  @Input() linklinke: string = "";
  @Output() onClick = new EventEmitter();



redesSocialesForm = new FormGroup({  
  id: new FormControl (''),
  linkFacebook: new FormControl('',[Validators.required]),
  linkInstagram: new FormControl('',[Validators.required]),
  linkLinkelin: new FormControl('',[Validators.required]),
});
  

onSubmit(value: any){
  if(this.redesSocialesForm.valid){
    alert('todo ok');
  } else{
    alert('error');
  };
  console.log(this.redesSocialesForm.value);
}

valoresInicialesSkillsRedes(){
    this.redesSocialesForm.setValue({
    id:"0",
    linkFacebook:this.linkFace,
    linkInstagram:this.linkInsta,
    linkLinkelin:this.linklinke
  });
}

ngOnInit(){
  
  this.valoresInicialesSkillsRedes();
};

modificarRedes(id:any):void{
  this.datosRedes.modificarRedesId(id,this.redesSocialesForm.value).subscribe(data =>{
    this.avisar(); 
  });
};

avisar(){
  this.onClick.emit();
};





 
  
  


}
