// Angular Module
import { NgModule } from '@angular/core';

// Angular Material Components
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    MatSidenavModule, MatToolbarModule, MatIconModule,
    MatListModule, MatSelectModule, MatCardModule,
    MatButtonModule, MatTableModule,MatInputModule, MatSlideToggleModule, MatCheckboxModule,
    MatRadioModule,MatDialogModule
  ],
  exports: [
    MatSidenavModule, MatToolbarModule, MatIconModule,
    MatListModule, MatSelectModule, MatCardModule,
    MatButtonModule, MatTableModule, MatInputModule, MatSlideToggleModule,MatCheckboxModule,
    MatRadioModule,MatDialogModule
  ]
})
export class MaterialModule {}