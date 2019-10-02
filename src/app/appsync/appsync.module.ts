import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AppSyncRoutingModule } from "./appsync-routing.module";
import { AppSyncComponent } from "./appsync.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AppSyncRoutingModule
    ],
    declarations: [
        AppSyncComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppSyncModule { }
