import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "AppSync",
    moduleId: module.id,
    styleUrls: ["./appsync.component.css"],
    templateUrl: "./appsync.component.html"
})
export class AppSyncComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
