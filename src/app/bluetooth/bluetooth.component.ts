import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { alert } from "tns-core-modules/ui/dialogs";
var bluetooth = require("nativescript-bluetooth");

@Component({
    selector: "Bluetooth",
    moduleId: module.id,
    styleUrls: ["./bluetooth.component.css"],
    templateUrl: "./bluetooth.component.html"
})
export class BluetoothComponent implements OnInit {
    constructor() { }
    devices = [];

    ngOnInit(): void {
        bluetooth.requestCoarseLocationPermission().then(
            function (granted) {
                console.log("Location permission requested, user granted? " + granted);
            }
        );
    }

    connect() {
        bluetooth.startScanning({
            onDiscovered: (peripheral) => {
                console.log(peripheral.UUID)
                if (peripheral.UUID == "E609101F-AEF0-CFF9-1D8B-A80DA23433A8") {
                    setTimeout(() => {
                        this.connectToRobot();
                    }, 3000);
                }
            }
        })

    }

    connectToRobot() {
        bluetooth.connect({
            UUID: "E609101F-AEF0-CFF9-1D8B-A80DA23433A8",
            onConnected: (peripheral) => {
                alert({
                    message: "Connected 🤖",
                    okButtonText: "Ok",
                    title: "Top 10"
                });
                console.log("Periperhal connected with UUID!!: " + peripheral.UUID);
            },
            onDisconnected: (peripheral) => {
                console.log("Periperhal disconnected with UUID: " + peripheral.UUID);
            }
        });
    }

    move() {
        bluetooth.write({
            peripheralUUID: "E609101F-AEF0-CFF9-1D8B-A80DA23433A8",
            serviceUUID: "ffe5",
            characteristicUUID: "ffe9",
            value: "0x71,0x30,0x255"
        }).then((result) => {
            console.log("value written");
        }, (err) => {
            console.log("write error: " + err);
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
