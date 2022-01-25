To use this library:

```bash
$ npm install @corentinmag/ngx-float-button
$ ng add @angular/material
```

```typescript
// app.module.ts

import { NgxFloatButtonModule } from '@corentinmag/ngx-float-button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
...

@NgModule({
    ...,
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxFloatButtonModule
    ]
})
```


```html
<!-- app.component.html -->
<ngx-float-button>
    <ngx-float-item-button></ngx-float-item-button>
    <ngx-float-item-button></ngx-float-item-button>
    <ngx-float-item-button></ngx-float-item-button>
</ngx-float-button>
```

## Ngx-float-button

**List of Inputs**

| @Inputs              | type                                 | default  | description  |
|----------------------|--------------------------------------|----------|--------------|
| **direction**        | `'top' | 'left' | 'right' | 'bottom'`| `top`    | position of the child buttons relative to the main button  |
| **icon**             | `string`                             | `home`   | should be a material icon string (https://fonts.google.com/icons)  |
| **tooltip**          | `string`                             | `home`   | not used  |
| **color**            | `ThemePalette`                       | `primary`| main button color  |
| **position**         | `'br' | 'bl' | 'tl' | 'tr'`          | `br`     | either the main button is positionned on the bottom-right, bottom-left, top-left or top-right of the viewport  |
| **disabled**         | `boolean`                            | `false`  | either the main button is disabled or not  |
| **spaceBetween**     | `number`                             | `5`      | the space in pixel between each child button   |
| **spaceGap**         | `number`                             | `15`     | the space in pixel between the main button and the first child button   |
| **isOpen**           | `boolean`                            | `false`  | either the child buttons should appear at startup  |
| **hoverable**      | `boolean`                            | `false`  | either the user should hover or click the main button to reveal the child buttons  |
| **tooltipDisabled**  | `boolean`                            | `false`  | either tooltip is enabled or not |


## Ngx-float-item-button

**List of Inputs**

| @Inputs              | type                                 | default  | description  |
|----------------------|--------------------------------------|----------|--------------|
| **icon**             | `string`                             | `home`   | should be a material icon string (https://fonts.google.com/icons)  |
| **tooltip**          | `string`                             | `home`   | the tooltip text  |
| **color**            | `ThemePalette`                       | `primary`| main button color  |
| **disabled**         | `boolean`                            | `false`  | either the button is disabled or not  |
| **tooltipDisabled**  | `boolean`                            | `false`  | either tooltip is enabled or not |