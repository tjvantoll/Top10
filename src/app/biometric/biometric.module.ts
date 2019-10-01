import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BiometricRoutingModule } from "./biometric-routing.module";
import { BiometricComponent } from "./biometric.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BiometricRoutingModule
    ],
    declarations: [
        BiometricComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BiometricModule { }
