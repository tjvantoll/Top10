import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application";
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { View } from 'tns-core-modules/ui/core/view';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "AppSync",
    moduleId: module.id,
    styleUrls: ["./appsync.component.css"],
    templateUrl: "./appsync.component.html"
})
export class AppSyncComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
        if (scrollView.verticalOffset < 250) {
            const offset = scrollView.verticalOffset / 2;
            topView.translateY = Math.floor(offset);
        }
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
