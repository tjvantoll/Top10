import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { LibraryService } from "./libraries.service";

@Component({
    selector: "Sharing",
    moduleId: module.id,
    styleUrls: ["./sharing.component.css"],
    templateUrl: "./sharing.component.html"
})
export class SharingComponent implements OnInit {
    chanceResult = "chance";
    lodashResult = "lodash";
    momentResult = "moment";

    constructor(private libraryService: LibraryService) {}

    ngOnInit(): void {
        this.chance(this.libraryService.chance());
        this.lodash(this.libraryService.lodash());
        this.moment(this.libraryService.moment());
    }

    chance(Chance) {
        // this.chanceResult = new Chance().name();
        // this.chanceResult = new Chance().paragraph();
        // this.chanceResult = new Chance().word();
        // this.chanceResult = new Chance().email();
        this.chanceResult = new Chance().address();
        // this.chanceResult = new Chance().date();
    }

    lodash(_) {
        let team = [
            { name: "TJ" },
            { name: "Sebastian" },
            { name: "Rob" },
            { name: "Stanimira" }
        ];
        let sortedTeam = _.sortBy(team, (user) => {
            return user.name;
        });

        this.lodashResult = _.map(sortedTeam, "name").join(", ");
    }

    moment(moment) {
        this.momentResult = moment().format("LLL");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}