import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { alert } from "tns-core-modules/ui/dialogs";
import { File, knownFolders } from "tns-core-modules/file-system";

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

    /*
NSString *soundFilePath = [NSString stringWithFormat:@"%@/test.m4a",[[NSBundle mainBundle] resourcePath]];
NSURL *soundFileURL = [NSURL fileURLWithPath:soundFilePath];

AVAudioPlayer *player = [[AVAudioPlayer alloc] initWithContentsOfURL:soundFileURL error:nil];
player.numberOfLoops = -1; //Infinite

[player play];
*/


    playSound() {
        console.log("---");
        console.log("---");console.log("---");
        console.log("---");
        console.log("---");
        console.log("---");
        console.log("---");
        console.log("---");


        var url = NSURL.fileURLWithPath(knownFolders.currentApp().path + "/app/sounds/Monkey.mp3");
        var player = AVAudioPlayer.alloc().initWithContentsOfURLError(url);

        player.numberOfLoops = 3;
        player.prepareToPlay();

        setTimeout(() => {
            player.play();
        }, 2000);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
