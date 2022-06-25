import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule/*RouterModule*/ } from '../app-routing.module';



@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    FooterComponent
  ],
  //se van a exportar todos los componentes que se usaran en el app.component(componente principal)
    exports:[
      SidebarComponent,
      FooterComponent,
      MenuComponent
  ],
  //los que se importan son los modulos
  imports: [
    CommonModule,
    AppRoutingModule//tambien se puede RouterModule
  ]
})
export class SharedModule { }
