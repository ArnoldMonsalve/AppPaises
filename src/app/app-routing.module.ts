import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorpaisComponent } from './Pais/pages/porpais/porpais.component';
import { PorRegionComponent } from './Pais/pages/por-region/por-region.component';
import { PorcapitalComponent } from './Pais/pages/porcapital/porcapital.component';
import { VerpaisComponent } from './Pais/pages/verpais/verpais.component';

//tener cuidado: los espacios se toman en las rutas y puede provocar errores
const routes: Routes = [{path:'',component: PorpaisComponent, pathMatch: 'full'},
{path:'region',component:PorRegionComponent},
{path:'capital',component:PorcapitalComponent},
{path:'verpais/:id',component:VerpaisComponent},
{path: '**', redirectTo:''}


/* apuntes del crudRouting
{path:'home', component: LoginComponent},
{path:'ver', component: VerComponent},
{path:'crear', component: CrearComponent},
{path:'editar/:id', component: EditarComponent},
{path: '', redirectTo:'home' , pathMatch: 'full'},
{path: '**', redirectTo:'home'}*/]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
