import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "APIs",
    moduleId: module.id,
    styleUrls: ["./apis.component.css"],
    templateUrl: "./apis.component.html"
})
export class APIsComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    toggleFlashlight() {
        var device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo);
        device.lockForConfiguration();
        device.torchMode = AVCaptureTorchMode.On;
        device.flashMode = AVCaptureFlashMode.On;
        device.unlockForConfiguration();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
