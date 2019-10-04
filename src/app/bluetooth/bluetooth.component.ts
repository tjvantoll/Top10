import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Bluetooth",
    moduleId: module.id,
    styleUrls: ["./bluetooth.component.css"],
    templateUrl: "./bluetooth.component.html"
})
export class BluetoothComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}