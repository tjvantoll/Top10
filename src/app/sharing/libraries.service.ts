import { Injectable } from "@angular/core";
import * as chance from "chance";
import * as _ from "lodash";
import * as moment from "moment";

@Injectable()
export class LibraryService {
    chance() { return chance; }
    lodash() { return _; }
    moment() { return moment; }
}
