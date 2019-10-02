import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { alert, confirm } from "tns-core-modules/ui/dialogs";
import { FingerprintAuth, BiometricIDAvailableResult } from "nativescript-fingerprint-auth";

@Component({
    selector: "Biometric",
    moduleId: module.id,
    styleUrls: ["./biometric.component.css"],
    templateUrl: "./biometric.component.html"
})
export class BiometricComponent implements OnInit {
    fingerprintAuth: FingerprintAuth;

    constructor() {
        this.fingerprintAuth = new FingerprintAuth();
    }

    ngOnInit(): void {}

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    submit() {
        this.fingerprintAuth.available()
            .then((result: BiometricIDAvailableResult) => {
                // Biometric auth is not available. Just navigate them to the home page.
                if (!result.any) {
                    console.log("Biometric authentication not available.");
                    return;
                }

                var authName = result.face ? "Face ID" : "your fingerprint";
                confirm({
                    title: "APP NAME",
                    message: `Would you like to use ${authName} to authenticate on future visits?`,
                    okButtonText: "Yes",
                    cancelButtonText: "No"
                }).then((result) => {
                    if (result) {
                        // They opted in
                        this.biometricAuth();
                    } else {
                        // They opted out
                    }
                });
            });
    }

    biometricAuth() {
        return this.fingerprintAuth.verifyFingerprint({
            title: "APP NAME",
            message: ""
        }).then(() => {
            console.log("Success");
        });
    }
}