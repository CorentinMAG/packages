import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { timer } from "rxjs";

@Component({
    selector: 'ngx-demo-splash',
    templateUrl: './demo-splash.component.html',
    styleUrls: ['./demo-splash.component.scss']
})
export class DemoSplashComponent {

    stages = [
        {
          messageBefore: 'Initializing profile...',
          messageAfter: 'Profile initialized!',
          observable: timer(2000)
        },
        {
          messageBefore: 'Getting data...',
          messageAfter: 'Got data!',
          observable: timer(5000)
        },
      ]

      constructor(
          private router: Router
      ) {}

      onFinalize (e: boolean) {
        this.router.navigate(['splash/home']);
      }

}