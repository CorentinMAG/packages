import { Component } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { DIRECTION, POSITION } from "projects/corentinmag/ngx-float-button/src/lib/model/model";

@Component({
    selector: 'ngx-demo-floatbutton',
    templateUrl: './demo-floatbutton.component.html',
    styleUrls: ['./demo-floatbutton.component.scss']
})
export class DemoFloatButtonComponent {
    isOpen: boolean = false;
    tooltipDisabled: boolean = false;
    disabled: boolean = false;
    isHoverable: boolean = false;
    spaceBetween: number = 5;
    spaceGap: number = 15;
    mainColor: ThemePalette = 'primary';
    mainIcon: string = 'home';
    direction: DIRECTION = 'top';
    position: POSITION = 'br';

    child1tooltipDisabled: boolean = false;
    child1Color: ThemePalette = 'accent';
    child1disabled: boolean = false;
    child1Icon: string = 'home';
    tooltipText: string = 'home';
}