import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { ConfigComponent } from './components/config/config.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {path: 'solicitud' , component: SolicitudComponent},
  {path: 'config' , component: ConfigComponent},
  {path: 'perfil' , component: PerfilComponent},
  {path: 'listaTickets' , component: SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SolicitudComponent,ConfigComponent,PerfilComponent]