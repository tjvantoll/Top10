import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharingRoutingModule } from "./sharing-routing.module";
import { SharingComponent } from "./sharing.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharingRoutingModule
    ],
    declarations: [
        SharingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharingModule { }
