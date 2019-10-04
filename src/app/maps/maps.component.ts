import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Mapbox } from "nativescript-mapbox";

registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

@Component({
    selector: "Maps",
    moduleId: module.id,
    styleUrls: ["./maps.component.css"],
    templateUrl: "./maps.component.html"
})
export class MapsComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    onMapReady() {

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
