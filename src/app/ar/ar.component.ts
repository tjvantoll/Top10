import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { AR, ARMaterial, ARPlaneTappedEventData } from "nativescript-ar";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Color } from "tns-core-modules/color";

registerElement("AR", () => require("nativescript-ar").AR);

@Component({
    selector: "AR",
    moduleId: module.id,
    styleUrls: ["./ar.component.css"],
    templateUrl: "./ar.component.html"
})
export class ARComponent implements OnInit {
    // All these are valid plane materials:
    // public planeMaterial = "Assets.scnassets/Materials/tron/tron-diffuse.png";
    // public planeMaterial = new Color("red");
    public planeMaterial = <ARMaterial>{
        diffuse: new Color("white"),
        transparency: 0.2
    };

    constructor() {
        console.log("AR supported? " + AR.isSupported());
    }

    ngOnInit() {}

    planeTapped(args: ARPlaneTappedEventData): void {
        console.log(`Plane tapped at ${args.position.x} y ${args.position.y} z ${args.position.z}`);
        const ar: AR = args.object;
        // interact with the 'ar' object here if you like
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
