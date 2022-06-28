import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorcapitalComponent } from './pages/porcapital/porcapital.component';
import { PorpaisComponent } from './pages/porpais/porpais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerpaisComponent } from './pages/verpais/verpais.component';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';




@NgModule({
  declarations: [
    PorcapitalComponent,
    PorpaisComponent,
    PorRegionComponent,
    VerpaisComponent,
    PaisTablaComponent
  ],
    //se van a exportar todos los componentes que se usaran en el app.component(componente principal) y fuera del directorio padre(pais)
  exports:[
    PorcapitalComponent,
    PorpaisComponent,
    PorRegionComponent,
    VerpaisComponent
  ],
  imports: [
    CommonModule,
    //permite poner el ngmodel
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
