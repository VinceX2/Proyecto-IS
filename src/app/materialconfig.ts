// Angular Module
import { NgModule } from '@angular/core';

// Angular Material Components
import { MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule
    ],
})
export class MaterialModule { }