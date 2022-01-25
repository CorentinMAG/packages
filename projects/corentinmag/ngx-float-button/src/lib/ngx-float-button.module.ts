import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxFloatItemButtonComponent } from './component/item/item.component';
import { NgxFloatButtonComponent } from './component/main/main.component';
import { NgxTooltipComponent } from './component/tooltip/tooltip.component';
import { NgxTooltipDirective } from './directive/tooltip.directive';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { OverlayModule } from '@angular/cdk/overlay';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StateService } from './service/state.service';



@NgModule({
  declarations: [
    NgxFloatButtonComponent,
    NgxFloatItemButtonComponent,
    NgxTooltipComponent,
    NgxTooltipDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    OverlayModule
  ],
  exports: [
    NgxFloatButtonComponent,
    NgxFloatItemButtonComponent,
    NgxTooltipDirective
  ],
  providers: [
    StateService
  ]
})
export class NgxFloatButtonModule { }
