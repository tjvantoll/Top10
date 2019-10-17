import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/animations", pathMatch: "full" },
    { path: "animations", loadChildren: () => import("./animations/animations.module").then(mod => mod.AnimationsModule) },
    { path: "apis", loadChildren: () => import("./apis/apis.module").then(mod => mod.APIsModule) },
    { path: "ar", loadChildren: () => import("./ar/ar.module").then(mod => mod.ARModule) },
    { path: "appsync", loadChildren: () => import("./appsync/appsync.module").then(mod => mod.AppSyncModule) },
    { path: "biometric", loadChildren: () => import("./biometric/biometric.module").then(mod => mod.BiometricModule) },
    { path: "bluetooth", loadChildren: () => import("./bluetooth/bluetooth.module").then(mod => mod.BluetoothModule) },
    { path: "image", loadChildren: () => import("./image/image.module").then(mod => mod.ImageModule) },
    { path: "maps", loadChildren: () => import("./maps/maps.module").then(mod => mod.MapsModule) },
    { path: "sharing", loadChildren: () => import("./sharing/sharing.module").then(mod => mod.SharingModule) },
    { path: "text", loadChildren: () => import("./text/text.module").then(mod => mod.TextModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
