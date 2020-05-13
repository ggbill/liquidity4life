import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';
    currentActivatedRoute: any;
    routerSubscription: any;
    dynamicClasses: any;
    constructor(private activatedRoute: ActivatedRoute, private router: Router) {

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.currentActivatedRoute = this.router.url.toLowerCase();
        });

    }

    ngOnInit(): void {

    }

    onActivate(event) {
        window.scroll(0, 0);
    }

}

