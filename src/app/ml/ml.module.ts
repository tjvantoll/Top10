import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MLRoutingModule } from "./ml-routing.module";
import { MLComponent } from "./ml.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MLRoutingModule
    ],
    declarations: [
        MLComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MLModule { }
