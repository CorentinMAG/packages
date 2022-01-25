import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFloatButtonModule } from 'projects/corentinmag/ngx-float-button/src/public-api';
import { DemoFloatButtonComponent } from './demo-floatbutton.component';
import { DemoRoutingModule } from './demo-floatbutton-routing.module';

@NgModule({
  declarations: [
    DemoFloatButtonComponent
  ],
  imports: [
    CommonModule,
    NgxFloatButtonModule,
    DemoRoutingModule
  ]
})
export class DemoFloatbuttonModule { }
