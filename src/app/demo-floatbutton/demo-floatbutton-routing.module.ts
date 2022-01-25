import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoFloatButtonComponent } from "./demo-floatbutton.component";

const routes: Routes = [
    {
        path: '',
        component: DemoFloatButtonComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule {}