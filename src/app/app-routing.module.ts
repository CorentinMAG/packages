import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'floatbutton',
    loadChildren: () => import('./demo-floatbutton/demo-floatbutton.module').then(m => m.DemoFloatbuttonModule)
  },
  {
    path: '',
    redirectTo: '/floatbutton',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
