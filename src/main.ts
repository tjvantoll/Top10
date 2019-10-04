// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppSync, SyncStatus } from "nativescript-app-sync";
import * as application from "tns-core-modules/application";
import { isIOS } from "tns-core-modules/platform";

import { AppModule } from "./app/app.module";

application.on(application.resumeEvent, () => {
    AppSync.sync({
        deploymentKey: isIOS? "aNCyP2vvgIj4rSejEdOpVGSRf7x0S1el9lsdW" : "MW8D2vlAxY7I2SAS8kr5NjNaZc4VS1el9lsdW"
    }, (syncStatus: SyncStatus) => {
        console.log("AppSync syncStatus: " + syncStatus);
    });
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
