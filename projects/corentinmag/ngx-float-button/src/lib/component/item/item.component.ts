import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NgxTooltipDirective } from '../../directive/tooltip.directive';
import { State } from '../../model/model';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'ngx-float-item-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class NgxFloatItemButtonComponent implements OnInit {

  @Input() icon: string = 'home';
  @Input() tooltip?: string;
  @Input() color: ThemePalette = 'primary';
  @Input() disabled: boolean = false;
  @Input() tooltipDisabled: boolean = false;

  @ViewChild('elementRef', {read: ElementRef}) elementRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('tooltipRef') tooltipRef!: NgxTooltipDirective;

  constructor(
    public stateService: StateService
  ) {}

  ngOnInit(): void {
  }

  @HostListener('click')
  onClick(): void {

    if (!this.disabled) {
      const currentState: State = this.stateService.currentState;

      const newState = {...currentState, isOpen: !currentState.isOpen};
      this.stateService.publish(newState);
    }
  }
}
