import { Component, OnInit, Input, ViewContainerRef, AfterViewInit, ContentChildren, QueryList, AfterContentInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { style, state, transition, animate, trigger, stagger, query } from '@angular/animations';
import { Subscription } from 'rxjs';
import { DIRECTION, DISPLAY, POSITION, State } from '../../model/model';
import { NgxFloatItemButtonComponent } from '../item/item.component';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'ngx-float-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('accordion', [
      state('open', style({
        visibility: 'visible'
      })),
      state('closed', style({
        visibility: 'hidden'
      })),
      transition('open => closed',
        query('ngx-float-item-button', [
          style({transform: 'scale(1)'}), 
          stagger(100, [animate('0.05s', style({transform:'scale(0)'}))])
        ]), 
      ),
      transition('closed => open', [style({visibility: 'visible'}),
        query('ngx-float-item-button', [ 
          style({transform: 'scale(0)'}),
          stagger(100, [animate('0.05s', style({transform:'scale(1)'}))])
        ]), 
    ])
  ]),
  trigger('openClose', [
    state('open', style({transform: 'scale(1.2)'})),
    state('closed', style({transform: 'scale(1)'})),
    transition('open => closed', [animate('0.1s')]),
    transition('closed => open', [animate('0.1s')])
  ])
]
})
export class NgxFloatButtonComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() direction: DIRECTION = 'top';
  @Input() icon: string = 'home';
  @Input() tooltip: string = 'home';
  @Input() color: string = 'primary';
  @Input() position: POSITION = 'br';
  @Input() disabled: boolean = false;
  @Input() spaceBetween: number = 5;
  @Input() spaceGap: number = 15;
  @Input() isOpen: boolean = false;
  @Input() hoverable: boolean = false;
  @Input() tooltipDisabled: boolean = false;

  public display: DISPLAY = 'column-reverse';
  public mainDisplay: DISPLAY = 'column-reverse';
  private _initState: State = {} as State;
  private _stateSubscription!: Subscription;

  // get the content inside <ng-content>
  // the attribute is populated after the AfterContent hook
  @ContentChildren(NgxFloatItemButtonComponent) buttons!: QueryList<NgxFloatItemButtonComponent>;

  constructor(
    private viewContainer: ViewContainerRef,
    public stateService: StateService
  ) {}

  ngOnInit(): void {
    this._initState = {
      isHoverable: this.hoverable,
      isOpen: this.isOpen,
      direction: this.direction,
      position: this.position
    }
    this.stateService.publish(this._initState);
  }

  toggle(): void {
    const state = this.stateService.currentState;
    const newState = {...state, isOpen: !state.isOpen};
    this.stateService.publish(newState);
  }

  ngOnDestroy(): void {
    this._stateSubscription!.unsubscribe();
  }

  ngAfterViewInit(): void {
    this._setPosition();
    this._setDirection();

    this._stateSubscription = this.stateService.state$.subscribe(
      (newState: State) => {

        if (!this.tooltipDisabled) {
          this._showTooltip(newState);
        }
      }
    );
  }

  private _showTooltip(state: State): void {
    const isOpen = state.isOpen;
    const buttons = this.buttons.toArray();

    if (isOpen) {
      buttons.forEach(b => !b.tooltipDisabled && b.tooltipRef.show());
    } else {
      buttons.forEach(b => b.tooltipRef.hide());
    }
  }

  private _setDirection(): void {

    switch (this.direction) {
      case 'bottom':
        this.mainDisplay = 'column';
        break;
      case 'top':
        this.mainDisplay = 'column-reverse';
        break;
      case 'left':
        this.mainDisplay = 'row-reverse';
        break;
      case 'right':
        this.mainDisplay = 'row';
        break;
    }
    this.display = this.mainDisplay;
  }

  private _setPosition(): void {
    const container = this.viewContainer.element.nativeElement;

    switch (this.position) {
      case 'br': // bottom right
        container.style.bottom = '50px';
        container.style.right = '50px';
        break;

      case 'bl': // bottom left
        container.style.bottom = '50px';
        container.style.left = '50px';
        break;

      case 'tl': // top left
        container.style.top = '50px';
        container.style.left = '50px';
        break;

      case 'tr': // top right
        container.style.top = '50px';
        container.style.right = '50px';
        break;

      default:
        throw new Error("position: 'br' | 'bl' | 'tl' | 'tr'");
    }
  }
}
