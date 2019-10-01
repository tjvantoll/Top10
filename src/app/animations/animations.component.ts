import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { registerElement } from "nativescript-angular";
import { LottieView } from "nativescript-lottie";

registerElement("LottieView", () => LottieView);

@Component({
    selector: "Animations",
    moduleId: module.id,
    templateUrl: "./animations.component.html"
})
export class AnimationsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
