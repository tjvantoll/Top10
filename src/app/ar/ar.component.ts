import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { AR, ARMaterial, ARPlaneTappedEventData } from "nativescript-ar";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Color } from "tns-core-modules/color";

registerElement("AR", () => require("nativescript-ar").AR);

@Component({
    selector: "ar-example",
    moduleId: module.id,
    styleUrls: ["./ar.component.css"],
    templateUrl: "./ar.component.html"
})
export class ARComponent implements OnInit {
    public planeMaterial = new Color("red");

    constructor() {
        console.log("AR supported? " + AR.isSupported());
        console.log("haz updates");
    }

    ngOnInit() { }

    onPlaneTapped(args: ARPlaneTappedEventData): void {
        console.log(`Plane tapped at ${args.position.x} y ${args.position.y} z ${args.position.z}`);
        const ar: AR = args.object;
        ar.addBox({
            position: {
                x: args.position.x,
                y: args.position.y,
                z: args.position.z
            },
            dimensions: {
                x: 0.1,
                y: 0.1,
                z: 0.1
            },
            mass: 20,
            materials: [new Color("blue")]
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}

