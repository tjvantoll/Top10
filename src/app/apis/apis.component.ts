import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { alert } from "tns-core-modules/ui/dialogs";
import { knownFolders } from "tns-core-modules/file-system";
import { isIOS } from "tns-core-modules/platform";

@Component({
    selector: "APIs",
    moduleId: module.id,
    styleUrls: ["./apis.component.css"],
    templateUrl: "./apis.component.html"
})
export class APIsComponent implements OnInit {
    isIOS = isIOS;
    constructor() { }

    ngOnInit(): void { }

    toggleFlashlight() {
        if (isIOS) {
            this.toggleFlashlightIOS();
        } else {
            this.toggleFlashlightAndroid();
        }
    }

    toggleFlashlightIOS() {
        var device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo);
        if (!device) {
            alert({
                title: "Native APIs",
                message: "This device does not have a flashlight.",
                okButtonText: "OK"
            });
            return;
        }

        device.lockForConfiguration();
        if (device.torchMode == AVCaptureTorchMode.On) {
            device.torchMode = AVCaptureTorchMode.Off;
            device.flashMode = AVCaptureFlashMode.Off;
        } else {
            device.torchMode = AVCaptureTorchMode.On;
            device.flashMode = AVCaptureFlashMode.On;
        }
        device.unlockForConfiguration();
    }

    toggleFlashlightAndroid() {
        var packageManager = app.getNativeApplication().getInstance().getPackageManager();
        var flashAvailable = packageManager.hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA_FLASH);

        if (!flashAvailable) {
            alert({
                title: "Native APIs",
                message: "This device does not have a flashlight.",
                okButtonText: "OK"
            });
            return;
        }

        var camera = android.hardware.Camera.open(0);
        var parameters = camera.getParameters();

        if (parameters.getFlashMode() == android.hardware.Camera.Parameters.FLASH_MODE_TORCH) {
            parameters.setFlashMode(android.hardware.Camera.Parameters.FLASH_MODE_OFF);
            camera.setParameters(parameters);
            camera.stopPreview();
        } else {
            parameters.setFlashMode(android.hardware.Camera.Parameters.FLASH_MODE_TORCH);
            camera.setParameters(parameters);
            camera.startPreview();
        }
    }

    playSound() {
        var url = NSURL.fileURLWithPath(knownFolders.currentApp().path + "/app/sounds/Monkey.mp3");
        var player = AVAudioPlayer.alloc().initWithContentsOfURLError(url);

        player.numberOfLoops = 10;
        player.prepareToPlay();
        player.play();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
