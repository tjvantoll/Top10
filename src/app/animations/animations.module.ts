import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AnimationsRoutingModule } from "./animations-routing.module";
import { AnimationsComponent } from "./animations.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AnimationsRoutingModule
    ],
    declarations: [
        AnimationsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AnimationsModule { }
