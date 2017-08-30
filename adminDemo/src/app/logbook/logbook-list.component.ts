import { Component, OnInit } from '@angular/core';

import {ILogbookMessage} from "./logbookMessage";
import {LogbookService} from "./logbook.service"

@Component({
    moduleId: module.id,
    templateUrl: './logbook-list.component.html',
    styleUrls: ['./logbook-list.component.css']
})

export class LogbookListComponent implements OnInit{
    pageTitle: string = "Logbook List";
    errorMessage: string;

    private _listFilter: string;

    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredMessages = this.listFilter ? this.performFilter(this.listFilter) : this.logbookMessages;
    }

    filteredMessages: ILogbookMessage[];
    logbookMessages: ILogbookMessage[] = [
      {   "id":15628759,      //ev_logbook
        "log_type":1,
        "text":"EEX Import aus Datei",
        "fk_action_type":10,
        "dauer":14731,
        "user_name":"kwptest",
        "timestamp":"10.03.2017 08:40:54",
        "day":"10.03.2017 00:00:00",
        "id_1":35155254,    // ev_logbook_message
        "message_type":"I",
        "text_1":"Neu gespeicherte Geschäfte : EIX125331bEB; EIX125331sEB; EIX125332bEB; EIX125332sEB; EIX615770sEB; EIX615950sEB; EIX615951sEB; EIX615634sEB. ",
        "additional_message":"xyz",
        "fk_logbook":15628759,
        "timestamp_1":"10.03.2017 08:41:09",
        "id_2":10,          // ev_action_type
        "shortcut":"ProgRemoteCall",
        "name":"Intraday Prognose - Remote Call",
        "description":"Führt die Intraday Prognose über einen Remote Call aus"},
      {   "id":15628781,
        "log_type":1,
        "text":"Übertragung Dealbestätigungen (PrAG)",
        "fk_action_type":9,
        "dauer":273,
        "user_name":"shptest",
        "timestamp":"16.03.2017 15:48:20",
        "day":"17.03.2017 00:00:00",
        "id_1":35155279,
        "message_type":"I",
        "text_1":"Beginne Versendung...",
        "additional_message":"xyz",
        "fk_logbook":15628781,
        "timestamp_1":"16.03.2017 15:48:20",
        "id_2":9,
        "shortcut":"Confirm Deal",
        "name":"Bestätigung eines Deals",
        "description":"Dient zur Bestätigung eines vereinbarten Strom-Deals"},
      {   "id":15628780,
        "log_type":1,
        "text":"Zuordnung der Unique Transaction Id",
        "fk_action_type":9,
        "dauer":3121,
        "user_name":"shptest",
        "timestamp":"16.03.2017 15:48:16",
        "day":"17.03.2017 00:00:00",
        "id_1":35155277,
        "message_type":"I",
        "text_1":"UTI-Zuordnung",
        "additional_message":"Dem Deal: ATL560EB <br/>wurde die Unique Transaction Id:  d0Q8XWYOzXeJHTj1pFbFOmcb3ON4lbCyQLURMAkvbx001 <br/>zugeordnet.",
        "fk_logbook":15628780,
        "timestamp_1":"16.03.2017 15:48:18",
        "id_2":9,
        "shortcut":"Confirm Deal",
        "name":"Bestätigung eines Deals",
        "description":"Dient zur Bestätigung eines vereinbarten Strom-Deals"},

    ];

    constructor(private _logbookService: LogbookService) {}

    ngOnInit(): void {
        // this._logbookService.getLogbookMessages().subscribe(logbookMessages => {
        //     this.logbookMessages = logbookMessages;
      this.filteredMessages = this.logbookMessages;
        // }, error => this.errorMessage = <any>error);

    }

    private performFilter(filterBy: string): ILogbookMessage[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.logbookMessages;
    }

}
