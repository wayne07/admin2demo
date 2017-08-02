import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {LogbookListComponent} from "./logbook-list.component";

@NgModule({
    imports: [
        RouterModule.forChild([
               { path: 'logbooks', component: LogbookListComponent }
               // { path: 'product/:id',
               //    canActivate: [ ProductDetailGuard ],
               //    component: ProductDetailComponent }
             ])
           ],
    exports: [ RouterModule ]
})
export class LogbookRoutingModule {}
