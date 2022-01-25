import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./tooltip.component.scss']
})
export class NgxTooltipComponent {

  @Input() tooltip: string = 'tooltip';
}