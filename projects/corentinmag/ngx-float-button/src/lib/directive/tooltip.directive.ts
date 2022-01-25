import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { NgxTooltipComponent } from '../component/tooltip/tooltip.component';
import { StateService } from '../service/state.service';

@Directive({
  selector: '[NgxTooltip]',
  exportAs: 'NgxTooltip'
})
export class NgxTooltipDirective implements OnInit {

  @Input('ngxTooltip') text: string = 'tooltip';

  private _overlayRef!: OverlayRef;

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private stateService: StateService,
    private elementRef: ElementRef,
    private overlay: Overlay
    ) {}

  ngOnInit(): void {
    const direction = this.stateService.currentState.direction;
    let positions: ConnectedPosition = {} as ConnectedPosition;

    if (direction === 'top' || direction === 'bottom') {
      positions = {
        offsetX: -45,
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center'
      };
    } else if (direction === 'left' || direction === 'right') {
      positions = { 
          offsetY: -55,
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'center'
        };
    }
    
    const positionStrategy = this.overlayPositionBuilder
    .flexibleConnectedTo(this.elementRef)
    .withPositions([positions]);

    this._overlayRef = this.overlay.create({positionStrategy});
  }

  show() {
    const tooltipPortal = new ComponentPortal(NgxTooltipComponent);
    const tooltipRef: ComponentRef<NgxTooltipComponent> = this._overlayRef.attach(tooltipPortal);
    tooltipRef.instance.tooltip = this.text;
  }

  hide() {
    this._overlayRef.detach();
  }
}