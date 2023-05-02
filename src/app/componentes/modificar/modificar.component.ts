import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {

redesSocialesForm = new FormGroup({
  facebook: new FormControl('',[Validators.required]),
  instagram: new FormControl('',[Validators.required]),
  linkedin: new FormControl('',[Validators.required]),
});

onSubmit(value: any){
  if(this.redesSocialesForm.valid){
    alert('todo ok');
  } else{
    alert('error');
  };
  console.log(this.redesSocialesForm.value);
}



 
  
  


}
