import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFloatButtonModule } from 'projects/corentinmag/ngx-float-button/src/public-api';
import { DemoFloatButtonComponent } from './demo-floatbutton.component';
import { DemoRoutingModule } from './demo-floatbutton-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'; 
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card'; 

@NgModule({
  declarations: [
    DemoFloatButtonComponent
  ],
  imports: [
    CommonModule,
    NgxFloatButtonModule,
    DemoRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule
  ]
})
export class DemoFloatbuttonModule { }
