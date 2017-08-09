import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ILogbookMessage} from "./logbookMessage";
import {Http, Response} from "@angular/http";

@Injectable()
export class LogbookService {

    private _logbookServiceUrl = './src/api/logbooks/logbooks.json';

    constructor(private _http: HttpClient) {
    }

    getLogbookMessages(): Observable<ILogbookMessage[]> {
        // return this._http.get(this._logbookServiceUrl)
        //     .map((response: Response) => <ILogbookMessage[]> response.json())
        //     .do(data => console.log('All: ' + JSON.stringify(data)))
        //     .catch(this.handleError);
        return this._http.get<ILogbookMessage>(this._logbookServiceUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }

}