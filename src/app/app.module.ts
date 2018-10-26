import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsuariosComponent,
    TicketsComponent,
    NavbarComponent,
    SidebarMenuComponent,
    ToolbarOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
