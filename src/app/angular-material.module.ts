import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


var modules = [
        BrowserAnimationsModule,
        MatButtonModule,
];



@NgModule( {
    imports: [ modules ],
    exports: [ modules ],
    providers: []
} )

export class AngularMaterialModule { }