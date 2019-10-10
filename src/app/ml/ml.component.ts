import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { MLKitRecognizeTextResult, MLKitRecognizeTextResultBlock } from "nativescript-plugin-firebase/mlkit/textrecognition";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

registerElement("MLKitTextRecognition", () => require("nativescript-plugin-firebase/mlkit/textrecognition").MLKitTextRecognition);

@Component({
    selector: "ML",
    moduleId: module.id,
    styleUrls: ["./ml.component.css"],
    templateUrl: "./ml.component.html"
})
export class MLComponent implements OnInit {

    blocks: Array<MLKitRecognizeTextResultBlock>;

    constructor() {}

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