import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { MLKitRecognizeTextResult, MLKitRecognizeTextResultBlock } from "nativescript-plugin-firebase/mlkit/textrecognition";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

registerElement("MLKitTextRecognition", () => require("nativescript-plugin-firebase/mlkit/textrecognition").MLKitTextRecognition);

@Component({
    selector: "text",
    moduleId: module.id,
    styleUrls: ["./text.component.css"],
    templateUrl: "./text.component.html"
})
export class TextComponent implements OnInit {
    blocks: Array<MLKitRecognizeTextResultBlock>;

    constructor() { }

    ngOnInit(): void {

    }

    onTextRecognitionResult(scanResult: any): void {
        const value: MLKitRecognizeTextResult = scanResult.value;
        this.blocks = value.blocks;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
