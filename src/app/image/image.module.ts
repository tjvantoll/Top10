import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ImageRoutingModule } from "./image-routing.module";
import { ImageComponent } from "./image.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ImageRoutingModule
    ],
    declarations: [
        ImageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ImageModule { }
