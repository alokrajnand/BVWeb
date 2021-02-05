import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

/// Angular material animation 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


var modules = [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
];



@NgModule( {
    imports: [ modules ],
    exports: [ modules ],
    providers: []
} )

export class AngularMaterialModule { }