import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {LogbookListComponent} from "./logbook-list.component";
import {LogbookRoutingModule} from "./logbook-routing.module";

@NgModule({
    imports: [LogbookRoutingModule, CommonModule],
    declarations: [LogbookListComponent]
})
export class LogbookModule {
}