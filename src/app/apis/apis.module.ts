import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { APIsRoutingModule } from "./apis-routing.module";
import { APIsComponent } from "./apis.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        APIsRoutingModule
    ],
    declarations: [
        APIsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class APIsModule { }
