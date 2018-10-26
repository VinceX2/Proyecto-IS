// Angular Module
import { NgModule } from '@angular/core';

// Angular Material Components
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule],
  exports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule]
})
export class MaterialModule {}