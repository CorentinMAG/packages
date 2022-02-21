import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSplashModule } from 'projects/corentinmag/ngx-splash/src/public-api';
import { DemoSplashComponent } from './demo-splash.component';
import { DemoSplashRoutingModule } from './demo-splash-routing.module';

@NgModule({
  declarations: [
    DemoSplashComponent
  ],
  imports: [
    CommonModule,
    NgxSplashModule,
    DemoSplashRoutingModule
  ]
})
export class DemoSplashModule { }
