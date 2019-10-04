import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/appsync", pathMatch: "full" },
    { path: "animations", loadChildren: () => import("./animations/animations.module").then(mod => mod.AnimationsModule) },
    { path: "appsync", loadChildren: () => import("./appsync/appsync.module").then(mod => mod.AppSyncModule) },
    { path: "biometric", loadChildren: () => import("./biometric/biometric.module").then(mod => mod.BiometricModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
