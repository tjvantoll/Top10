import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { Directions } from "nativescript-directions";
import * as geolocation from "nativescript-geolocation";
import { Mapbox, MapboxMarker, MapboxViewApi } from "nativescript-mapbox";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Color } from "tns-core-modules/color/color";
import { Accuracy } from "tns-core-modules/ui/enums";

registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

@Component({
    selector: "Maps",
    moduleId: module.id,
    styleUrls: ["./maps.component.css"],
    templateUrl: "./maps.component.html"
})
export class MapsComponent implements OnInit {
    mapbox: MapboxViewApi;
    directions: Directions;

    constructor() {
        this.directions = new Directions();
    }

    ngOnInit(): void { }

    onMapReady(args) {
        this.mapbox = args.map;
    }

    addMarkers() {
        const firstMarker = <MapboxMarker>{
            id: 1,
            lat: 37.823,
            lng: -122.3706,
            title: "Treasure Island 💰",
            subtitle: "Find treasure here 🤑",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: (marker) => {
                this.directions.navigate({
                    to: {
                        address: "Treasure Island, San Francisco, CA"
                    }
                });
            }
        };

        const secondMarker = <MapboxMarker>{
            id: 2,
            lat: 37.8270,
            lng: -122.4230,
            title: "Alcatraz Island 👮‍♂️",
            subtitle: "🔐🔒🔐🔒🔐🔒🔐🔒🔐🔒🔐🔒",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: (marker) => {
                this.directions.navigate({
                    to: {
                        address: "Alcatraz Island, San Francisco, CA"
                    }
                });
            }
        };

        this.mapbox.addMarkers([
            firstMarker, secondMarker
        ]);
    }

    animateCamera() {
        this.mapbox.animateCamera({
            target: {
                lat: 37.3382,
                lng: -121.883
            },
            duration: 1500
        });
    }

    draw() {
        this.mapbox.addPolygon({
            fillColor: new Color("lightblue"),
            fillOpacity: 0.8,

            // stroke-related properties are only effective on iOS
            strokeColor: new Color("gray"),
            strokeWidth: 3,
            strokeOpacity: 0.3,

            points: [
                { lat: 37.85, lng: -122.45 },
                { lat: 37.85, lng: -122.35 },
                { lat: 37.75, lng: -122.35 },
                { lat: 37.75, lng: -122.45 },
                { lat: 37.85, lng: -122.45 }
            ]
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
