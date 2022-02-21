import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { from, Subscription, timer } from 'rxjs';
import { concatMap, concatMapTo, delay, finalize } from 'rxjs/operators';
import { KEYFRAME, TIMING } from '../utils/animation';
import { Stage } from '../utils/stage';

@Component({
  selector: 'ngx-splash',
  templateUrl: './ngx-splash.component.html',
  styleUrls: ['./ngx-splash.component.scss'],
  animations: [
    trigger('fade', [
      transition(':leave', [
        animate('1000ms', style({opacity: 0}))
      ]),
    ])
  ]
})
export class NgxSplashComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() title: string = "My App";
  @Input() message: string = "Loading...";
  @Input() loader: string = "assets/@corentinmag/ngx-splash/loader.svg";
  @Input() icon: string = "assets/@corentinmag/ngx-splash/logo.jpg";
  @Input() animation: string = "assets/@corentinmag/ngx-splash/lottie-animation.json";
  @Input() stages: Stage[] = [];
  @Input() keyframe: Keyframe[] = KEYFRAME;
  @Input() keyframeOptions: object = TIMING;

  @Output() finalize: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('splash') container!: ElementRef;

  @HostBinding('style.height') hostHeight = '100%';

  splashSubscription!: Subscription;
  show: boolean = true;
  options: AnimationOptions | null = null;

  constructor() { }

  ngOnInit(): void {

    this.options = {
      path: this.animation,
      renderer: 'svg'
    }

    // we wait 1500ms before starting the subscription
    const source$ = timer(1500).pipe(concatMapTo(from(this.stages)));

    const result$ = source$.pipe(
      concatMap((stage: Stage) => {
        this.message = stage.messageBefore;
        return stage.observable.pipe(
          finalize(() => this.message = stage.messageAfter),
          delay(1000)
        )
      }),
      finalize(() => this.show = false)
    );

    this.splashSubscription = result$.subscribe();
  }

  ngAfterViewInit(): void {
    this.container.nativeElement.animate(this.keyframe, this.keyframeOptions);
  }

  onAnimationEnd (e: any) {
    if (e.toState) {
      this.hostHeight = '0';
      this.finalize.emit(true); 
    }
  }

  animationCreated (e: any) {}

  ngOnDestroy(): void {
    this.splashSubscription.unsubscribe();
  }
}
