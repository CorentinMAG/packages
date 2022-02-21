import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoSplashComponent } from './demo-splash.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: '',
      component: DemoSplashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoSplashRoutingModule { }