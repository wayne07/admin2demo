import {NgModule} from "@angular/core";
import {LogbookListComponent} from "./logbook-list.component";
import {LogbookRoutingModule} from "./logbook-routing.module";

@NgModule({
    imports: [ LogbookRoutingModule ],
    declarations: [ LogbookListComponent ]
})
export class LogbookModule {}