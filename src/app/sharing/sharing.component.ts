import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Sharing",
    moduleId: module.id,
    styleUrls: ["./sharing.component.css"],
    templateUrl: "./sharing.component.html"
})
export class SharingComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}