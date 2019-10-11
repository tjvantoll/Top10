import { Component, OnInit } from "@angular/core";
import { MLKitImageLabelingCloudResult } from "nativescript-plugin-firebase/mlkit/imagelabeling";
import { MLKitLandmarkRecognitionCloudResult } from "nativescript-plugin-firebase/mlkit/landmarkrecognition";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { fromUrl, ImageSource } from "tns-core-modules/image-source";

const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ImageProcessing",
    moduleId: module.id,
    styleUrls: ["./image.component.css"],
    templateUrl: "./image.component.html"
})
export class ImageComponent implements OnInit {
    landmarkURL = "https://www.novinite.com/media/images/2011-11/photo_verybig_134080.jpg";
    landmarkRenderedURL = "";
    landmarkResults = "";

    labelURL = "https://s.abcnews.com/images/US/world-cup-ap-0200-jpo-190707_hpMain_4x3_992.jpg";
    labelRenderedURL = "";
    labelResults = "";

    constructor() { }

    ngOnInit(): void { }

    detectLandmarks() {
        this.landmarkRenderedURL = this.landmarkURL;

        fromUrl(this.landmarkURL).then((imageSource: ImageSource) => {
            firebase.mlkit.landmarkrecognition.recognizeLandmarksCloud({
                image: imageSource,
                modelType: "latest", // either "latest" or "stable" (default "stable")
                maxResults: 8 // default 10
            })
            .then((result: MLKitLandmarkRecognitionCloudResult) => {
                this.landmarkResults = JSON.stringify(result.landmarks);
                console.log(this.landmarkResults);
            })
            .catch((errorMessage) => {
                console.log("ML Kit error: " + errorMessage)
            });
        });
    }

    labelImage() {
        this.labelRenderedURL = this.labelURL;

        fromUrl(this.labelURL).then((imageSource: ImageSource) => {
            firebase.mlkit.imagelabeling.labelImageCloud({
                image: imageSource,
                modelType: "stable", // either "latest" or "stable" (default "stable")
                maxResults: 5 // default 10
            })
            .then((result: MLKitImageLabelingCloudResult) => {
                this.labelResults = JSON.stringify(result.labels);
                console.log(this.labelResults);
            })
            .catch((errorMessage) => {
                console.log("ML Kit error: " + errorMessage);
            });
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
