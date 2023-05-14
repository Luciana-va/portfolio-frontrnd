import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { FormularioEducacionComponent } from './componentes/formulario-educacion/formulario-educacion.component';
import { FormularioAcercadeComponent } from './componentes/formulario-acercade/formulario-acercade.component';
import { EducacionService } from './servicios/educacion.service';
import { DatosPersonalesService } from './servicios/datos-personales.service';
import { LogService } from './servicios/log.service';
import { RedesSocialesService } from './servicios/redes-sociales.service';
import { FormularioSkillsComponent } from './componentes/formulario-skills/formulario-skills.component';
import { FormularioProyectosComponent } from './componentes/formulario-proyectos/formulario-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    PrincipalComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    LoginComponent,
    ProyectosComponent,
    ModificarComponent,
    FormularioEducacionComponent,
    FormularioAcercadeComponent,
    FormularioSkillsComponent,
    FormularioProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
  ],
  // En providers coloco los servicios que creo e importo
  providers: [
    EducacionService,
    DatosPersonalesService,
    LogService,
    RedesSocialesService,
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
