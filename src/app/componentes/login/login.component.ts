import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private datosPortfolio:PortfolioService){}

  usuario: string ="";
  contrasena: string ="";
  logIn: boolean = false;
  mostrarLogIn: boolean = false;
  text: string = (this.mostrarLogIn? 'Logout':'Login');

  LogIn()
  {
    if (this.usuario ==="1234" && this.contrasena === "1234"){
      console.log("ingreso correcto");
      this.logIn = true;
      console.log(this.logIn);
    }else{
      console.log("ingreso incorrecto");
      this.logIn = false;
      console.log(this.logIn);
    }
    this.datosPortfolio.log.emit(this.logIn);
  }

  LogOut(){
    this.logIn = false;
    console.log(this.logIn);
    this.datosPortfolio.log.emit(this.logIn);
  }
}
      