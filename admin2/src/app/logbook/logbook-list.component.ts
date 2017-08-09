import { Component, OnInit } from '@angular/core';

import {ILogbookMessage} from "./logbookMessage";
import {LogbookService} from "./logbook.service"

@Component({
    moduleId: module.id,
    templateUrl: 'logbook-list.component.html',
    styleUrls: ['logbook-list.component.css']
})

export class LogbookListComponent implements OnInit{

    pageTitle: string = "Logbook List";
    errorMessage: string;

    logbookMessages: ILogbookMessage[] = [];

    constructor(private _logbookService: LogbookService) {}

    ngOnInit(): void {
        this._logbookService.getLogbookMessages().subscribe(logbookMessages => {
            this.logbookMessages = logbookMessages;
        }, error => this.errorMessage = <any>error);

    }

}