import { Component } from "@angular/core";

@Component({
  selector: 'admin-app',
  template: `
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/welcome']">Home</a></li>
                        <li><a [routerLink]="['/logbooks']">Logbook List</a></li>
                    </ul>
                </div>
            </nav>
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Admin2 Demo';
}
