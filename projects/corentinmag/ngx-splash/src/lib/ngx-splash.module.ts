import { NgModule } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import { CommonModule } from '@angular/common';
import { NgxSplashComponent } from './components/ngx-splash.component';

export function playerFactory () {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');;
}

@NgModule({
  declarations: [
    NgxSplashComponent
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({player: playerFactory})
  ],
  exports: [
    NgxSplashComponent
  ]
})
export class NgxSplashModule { }
