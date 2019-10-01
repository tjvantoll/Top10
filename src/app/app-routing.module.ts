import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/biometric", pathMatch: "full" },
    { path: "animations", loadChildren: "~/app/animations/animations.module#AnimationsModule" },
    { path: "biometric", loadChildren: "~/app/biometric/biometric.module#BiometricModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
