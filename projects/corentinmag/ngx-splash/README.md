To use this library:

```bash
$ npm install @corentinmag/ngx-splash lottie-web ngx-lottie
```

> check demo [here](https://packages-xi.vercel.app )

```typescript
// app.module.ts

import { NgxSplashModule } from '@corentinmag/ngx-float-button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
...

@NgModule({
    ...,
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxSplashModule
    ]
})
```


```html
<!-- app.component.html -->
<ngx-splash 
    title="My Awesome App" 
    message="Loading application..."
    [stages]="stages"
    animation="assets/lottie-animation.json"
    icon="assets/logo.jpg"
    loader="assets/loader.svg"
    (finalize)="onFinalize($event)"
>
</ngx-splash>
```

**List of Inputs**

| @Inputs              | type                                 | default  | description  |
|----------------------|--------------------------------------|----------|--------------|
| **title**            | `string`                             | `My App` |  title       |
| **message**          | `string`                             | `Loading...`   | custom message to help user  |
| **loader**          | `string`                             | null   | path to the loader (svg)  |
| **icon**            | `string`                       | null| path to the main icon (enterprise logo, ...)  |
| **animation**         | `string`          | null     | either a lottie json file or a lottie url  |
| **stages**         | `Stage[]`  | null  | An array  of object containing the following keys `messageBefore`, `messageAfter`, `observable`  |
| **keyframe**     | `Keyframe[]`                             | null      | animation that is played while the slash screen is active   |
| **keyframeOptions**         | `object`                             | `15`     | option for the keyframe object   |


## Stage

```typescript
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
```
