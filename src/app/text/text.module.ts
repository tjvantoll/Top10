import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TextRoutingModule } from "./text-routing.module";
import { TextComponent } from "./text.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TextRoutingModule
    ],
    declarations: [
        TextComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TextModule { }
