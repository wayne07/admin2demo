import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {LogbookListComponent} from "./logbook-list.component";
import {RouterModule} from "@angular/router";
import {LogbookService} from "./logbook.service";
// import {datetimepicker} from "angular-bootstrap-datetimepicker";

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: 'logbooks', component: LogbookListComponent }
        // { path: 'product/:id',
        //    canActivate: [ ProductDetailGuard ],
        //    component: ProductDetailComponent }
      ]),
    ],
    declarations: [LogbookListComponent],
    providers: [
      LogbookService
    ]
})
export class LogbookModule {
}
