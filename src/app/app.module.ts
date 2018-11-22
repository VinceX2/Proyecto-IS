import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

// HTTP
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './services/ticket.service';

// Angular Material Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Angular Components
import { MaterialModule } from './materialconfig';

// App Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { ToolbarOptionsComponent } from './components/toolbar-options/toolbar-options.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { ConfigComponent } from './components/config/config.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistrationComponent } from './components/registration/registration.component';

// Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormCrearTicketComponent } from './components/form-crear-ticket/form-crear-ticket.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsuariosComponent,
    TicketsComponent,
    NavbarComponent,
    SidebarMenuComponent,
    ToolbarOptionsComponent,
    SolicitudComponent,
    ConfigComponent,
    PerfilComponent,
    RegistrationComponent,
    FormCrearTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ], entryComponents: [
    FormCrearTicketComponent
  ],
  providers: [TicketService, TicketsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
