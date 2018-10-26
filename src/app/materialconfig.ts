// Angular Module
import { NgModule } from '@angular/core';

// Angular Material Components
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatSidenavModule, MatToolbarModule, MatIconModule,
    MatListModule, MatSelectModule, MatCardModule,
    MatButtonModule, MatTableModule
  ],
  exports: [
    MatSidenavModule, MatToolbarModule, MatIconModule,
    MatListModule, MatSelectModule, MatCardModule,
    MatButtonModule, MatTableModule
  ]
})
export class MaterialModule {}