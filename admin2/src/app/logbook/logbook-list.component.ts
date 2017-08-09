import { Component } from '@angular/core';
import {ILogbookMessage} from "./logbookMessage";

@Component({
    moduleId: module.id,
    templateUrl: 'logbook-list.component.html',
    styleUrls: ['logbook-list.component.css']
})

export class LogbookListComponent {
    pageTitle: string = "Logbook List";
    logbookMessages: ILogbookMessage[] = [
        {   "id":15628759,      //ev_logbook
            "log_type":1,
            "text":"EEX Import aus Datei",
            "fk_action_type":10,
            "dauer":14731,
            "user_name":"kwptest",
            "timestamp":"10.03.17 08:40:54",
            "day":"10.03.17 00:00:00",
            "id_1":35155254,    // ev_logbook_message
            "message_type":"I",
            "text_1":"Neu gespeicherte Geschäfte : EIX125331bEB; EIX125331sEB; EIX125332bEB; EIX125332sEB; EIX615770sEB; EIX615950sEB; EIX615951sEB; EIX615634sEB. ",
            "fk_logbook":15628759,
            "timestamp_1":"10.03.17 08:41:09",
            "id_2":10,          // ev_action_type
            "shortcut":"ProgRemoteCall",
            "name":"Intraday Prognose - Remote Call",
            "description":"Führt die Intraday Prognose über einen Remote Call aus"}
    ];

}